import { Injectable } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { ConfigService } from 'src/services/config.service';
import { Server } from '../models/server.model';

@Injectable()
export class ContentGuard  {

    constructor(private authService:AuthService, private Router:Router, public configService: ConfigService ) { }

    // used to redirect router if server or channel is invalid
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const server = route.params['server'];
        const channel = route.params['channel'];

        // makes sure server and channel both exist
        this.configService.getChannelList().subscribe((res) => {

            this.configService.serversWithChannels = res as Server[];

            let serverExists = false;
            let channelExists = false;
        
            this.configService.serversWithChannels.forEach((s) => {

                if (s.name === server) {
                    serverExists = true;
                    
                    if (s.channels && s.channels.length > 0) {
                        for (let i = 0; i < s.channels.length; i++) {
                            
                            if (s.channels[i].name === channel) {
                                channelExists = true;
                                return true;
                            }
                        }

                        if(!channelExists) {

                            this.Router.navigate(['/' + server + '/welcome']);
                            return false;
                        }
                    }
                }
                    return true;
                });

                if (!serverExists) {
                    this.Router.navigate(['/login']);
                    return false;
                } else {
                    this.Router.navigate(['/' + server + '/welcome']);
                    return false;
                }
        });
    }
}