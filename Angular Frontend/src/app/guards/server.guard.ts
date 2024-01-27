import { Injectable } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/services/auth.service';
import { ConfigService } from 'src/services/config.service';

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

                // this.configService.getChannelList().subscribe((res) => {

                //     this.configService.channels = res as String[];
        
                //     console.log(this.configService.channels);
                //     console.log(server);
        
                //     let channelExists = false;
        
                //     this.configService.channels.forEach((c) => {
                //         if (c === channel) {
                //             channelExists = true;
                //         }
                //     });
        
                //     if (channelExists) {
                //         return true;
                        
                //     } else {
                //         this.Router.navigate(['/' + server + '/welcome']);
                //         return false;
                //     }
                // });
                return true;

            } else {
                this.Router.navigate(['/' + res[0] + '/welcome']);
                return false;
            }
        });
    }

}