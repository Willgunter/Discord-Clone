import { Injectable } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';
import { ConfigService } from 'src/services/config.service';
import { Channel } from '../models/channel.model';
import { Server } from '../models/server.model';

@Injectable()
export class ServerGuard  {

    constructor(private authService:AuthService, private Router:Router, public configService: ConfigService ) { }

    // used ot redirect router if server or channel is invalid
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const server = route.params['server'];
        const channel = route.params['channel'];

        // basically user guard but for servers and channels
        this.configService.getServerList().subscribe((res) => {

            this.configService.servers = res as String[];

            console.log(this.configService.servers);
            console.log(server);

            let serverExists = false;

            this.configService.servers.forEach((s) => {
                if (s === server) {
                    serverExists = true;
                }
            });

            if (serverExists) {

                this.configService.getChannelList().subscribe((res) => {

                    this.configService.serversWithChannels = res as Server[];
        
                    console.log(this.configService.serversWithChannels);
                    console.log(server);
        
                    let channelExists = false;
        
                    this.configService.serversWithChannels.forEach((s) => {
                        // console.log(s);
                        if (s.name === server) {
                            // console.log("channels: " + s.channels);
                            if (s.channels && s.channels.length > 0) {
                                for (let i = 0; i < s.channels.length; i++) {
                                    // console.log("cname" + s.channels[i].name);
                                    if (s.channels[i].name === channel) {
                                        channelExists = true;
                                    }
                                }
                            }
                        }
                    });
        
                    if (channelExists) {
                        return true;
                        
                    } else {
                        this.Router.navigate(['/' + server + '/welcome']);
                        return false;
                    }
                });
                return true;

            } else {
                this.Router.navigate(['/' + res[0] + '/welcome']);
                return false;
            }
        });
    }

}