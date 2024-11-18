"use strict";(self.webpackChunkilia_kebets_tech_blog=self.webpackChunkilia_kebets_tech_blog||[]).push([[5783],{6355:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=t(4848),r=t(8453);const s={slug:"Run-Unity-game-on-Raspberry-Pi-4-with-Picade-arcade-machine",title:"Run Unity game on Raspberry Pi 4 with Picade arcade machine",authors:["ilia"],tags:["Raspberry Pi","Unity","Raspbian","Retro Gaming"]},a="Run Unity game on Raspberry Pi 4 with Picade arcade machine",o={permalink:"/blog/Run-Unity-game-on-Raspberry-Pi-4-with-Picade-arcade-machine",editUrl:"https://github.com/kebetsi/kebetsi.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2021-07-06-unity-raspberry-pi-picade/index.md",source:"@site/blog/2021-07-06-unity-raspberry-pi-picade/index.md",title:"Run Unity game on Raspberry Pi 4 with Picade arcade machine",description:"A friend approached me to help him install a game he implemented with Unity on his Raspberry Pi 4B (4GB) bundled with a Picade retro arcade machine. Here are the steps we followed to install it.",date:"2021-07-06T00:00:00.000Z",tags:[{inline:!0,label:"Raspberry Pi",permalink:"/blog/tags/raspberry-pi"},{inline:!0,label:"Unity",permalink:"/blog/tags/unity"},{inline:!0,label:"Raspbian",permalink:"/blog/tags/raspbian"},{inline:!0,label:"Retro Gaming",permalink:"/blog/tags/retro-gaming"}],readingTime:5.565,hasTruncateMarker:!0,authors:[{name:"Ilia Kebets",title:"Software engineer @ Sonar",url:"https://github.com/kebetsi",page:{permalink:"/blog/authors/ilia"},socials:{linkedin:"https://www.linkedin.com/in/iliakebets/",github:"https://github.com/kebetsi"},imageURL:"https://github.com/kebetsi.png",key:"ilia"}],frontMatter:{slug:"Run-Unity-game-on-Raspberry-Pi-4-with-Picade-arcade-machine",title:"Run Unity game on Raspberry Pi 4 with Picade arcade machine",authors:["ilia"],tags:["Raspberry Pi","Unity","Raspbian","Retro Gaming"]},unlisted:!1,prevItem:{title:"Inter-process synchronization in Java using FileLock",permalink:"/blog/Inter-process-synchronization-in-Java-using-FileLock"}},l={authorsImageUrls:[void 0]},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Write the OS image to the SD card",id:"write-the-os-image-to-the-sd-card",level:2},{value:"Connect to the Raspberry Pi via WiFi",id:"connect-to-the-raspberry-pi-via-wifi",level:2},{value:"Deploy game",id:"deploy-game",level:2},{value:"Point the default web server to the game folder",id:"point-the-default-web-server-to-the-game-folder",level:2},{value:"Install Picade driver",id:"install-picade-driver",level:2},{value:"Setup the keys mapping",id:"setup-the-keys-mapping",level:2},{value:"Start fullscreen browser with game on boot",id:"start-fullscreen-browser-with-game-on-boot",level:2},{value:"Fix sound",id:"fix-sound",level:2},{value:"Cleanup background to display on load",id:"cleanup-background-to-display-on-load",level:2},{value:"Hide mouse tracker",id:"hide-mouse-tracker",level:2},{value:"The result",id:"the-result",level:2},{value:"Try the game",id:"try-the-game",level:2},{value:"Sources",id:"sources",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["A friend approached me to help him install a game he implemented with ",(0,n.jsx)(i.a,{href:"https://unity.com/",children:"Unity"})," on his Raspberry Pi 4B (4GB) bundled with a Picade retro arcade machine. Here are the steps we followed to install it."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"The game running on the Picade arcade",src:t(6541).A+"",width:"2048",height:"1536"})}),"\n",(0,n.jsx)(i.p,{children:"The main issue was that the Raspberry board is powered by an ARM CPU which is not compatible with the x86_64 builds that Unity could do. We have tried running an Android build of the game, but it did not launch. The game itself is a retro platformer with limited graphical features, therefore we finally went with the WebGL approach, running the game in a browser on the Raspberry Pi."}),"\n",(0,n.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.raspberrypi.com/products/raspberry-pi-4-model-b/",children:"Raspberry Pi 4B"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://shop.pimoroni.com/products/picade?variant=29210087489619",children:"Picade"})}),"\n",(0,n.jsx)(i.li,{children:"micro SD card, at least 4 GB"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"write-the-os-image-to-the-sd-card",children:"Write the OS image to the SD card"}),"\n",(0,n.jsxs)(i.p,{children:["We have used ",(0,n.jsx)(i.a,{href:"https://www.raspberrypi.com/software/",children:"Raspberry Pi Imager"})," to write the recommended Raspberry Pi OS (32-bit) to the SD card."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Raspberry Pi Imager",src:t(5072).A+"",width:"1584",height:"1108"})}),"\n",(0,n.jsxs)(i.p,{children:["Once the writing is done, plug the SD card into the Raspberry and boot it, filling the prompts as they come. We recommend to change the default password as otherwise an alert window will show up at boot. We changed it to a simple ",(0,n.jsx)(i.code,{children:"raspberry2"})," as security is not a requirement."]}),"\n",(0,n.jsx)(i.h2,{id:"connect-to-the-raspberry-pi-via-wifi",children:"Connect to the Raspberry Pi via WiFi"}),"\n",(0,n.jsx)(i.p,{children:"As we had to copy some files on the Raspberry, it was convenient to connect to it via SSH over WiFi (my machine doesn\u2019t have Ethernet ports)."}),"\n",(0,n.jsx)(i.p,{children:"You need to first connect the Raspberry to the WiFi. We connected a keyboard to it in order to enter the password, as well as a mouse to navigate the menus."}),"\n",(0,n.jsx)(i.p,{children:"Once it is done, you need to activate the SSH interface:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"Preferences Menu > Raspberry Pi Configuration > Interfaces Tab > Enable SSH > OK\n"})}),"\n",(0,n.jsx)(i.p,{children:"Then from your machine you can connect to it by running:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"ssh pi@raspberrypi.local\n"})}),"\n",(0,n.jsxs)(i.p,{children:["and entering your password (",(0,n.jsx)(i.code,{children:"raspberry2"})," for us)."]}),"\n",(0,n.jsx)(i.h2,{id:"deploy-game",children:"Deploy game"}),"\n",(0,n.jsxs)(i.p,{children:["A WebGL build needs to be served by a web server, a browser cannot simply open the ",(0,n.jsx)(i.code,{children:"index.html"})," file. We have therefore used ",(0,n.jsx)(i.a,{href:"https://nginx.org/en/",children:"NGINX"})," for this task."]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Export a WebGL build to your machine in ",(0,n.jsx)(i.code,{children:"${game-dir}"})]}),"\n",(0,n.jsxs)(i.li,{children:["On the Raspberry, create a directory for the game: ",(0,n.jsx)(i.code,{children:"mkdir /home/pi/game"})]}),"\n",(0,n.jsxs)(i.li,{children:["Copy the build from your machine to the Raspberry: ",(0,n.jsx)(i.code,{children:"scp -r ${game-dir} pi@raspberrypi.local:/home/pi/game"})]}),"\n",(0,n.jsxs)(i.li,{children:["Install NGINX on the Raspberry: ",(0,n.jsx)(i.code,{children:"sudo apt install nginx"})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"point-the-default-web-server-to-the-game-folder",children:"Point the default web server to the game folder"}),"\n",(0,n.jsxs)(i.p,{children:["For the following, we used ",(0,n.jsx)(i.code,{children:"vim"})," to edit files, which can be installed with: ",(0,n.jsx)(i.code,{children:"sudo apt install vim"}),"."]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Open an editor in the default server: ",(0,n.jsx)(i.code,{children:"sudo vim /etc/nginx/sites-enabled/default"})]}),"\n",(0,n.jsxs)(i.li,{children:["Change this line: ",(0,n.jsx)(i.code,{children:"root /var/www/html;"})]}),"\n",(0,n.jsxs)(i.li,{children:["To: ",(0,n.jsx)(i.code,{children:"root /home/pi/game/${game-dir};"})]}),"\n",(0,n.jsxs)(i.li,{children:["Save and close ",(0,n.jsx)(i.code,{children:"vim"}),": ESC + ",(0,n.jsx)(i.code,{children:":wq"})]}),"\n",(0,n.jsxs)(i.li,{children:["Launch NGINX: ",(0,n.jsx)(i.code,{children:"sudo /etc/init.d/nginx start"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"NGINX will run at boot, so there is no need of additional setup."}),"\n",(0,n.jsxs)(i.p,{children:["The game should now be available when opening ",(0,n.jsx)(i.a,{href:"http://localhost",children:"http://localhost"})," in a web browser on the Raspberry. You can also open such a window from your machine through SSH using:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"DISPLAY=:0 chromium-browser --start-fullscreen http://localhost\n"})}),"\n",(0,n.jsx)(i.h2,{id:"install-picade-driver",children:"Install Picade driver"}),"\n",(0,n.jsx)(i.p,{children:"Run:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"curl -sS https://get.pimoroni.com/picadehat | bash\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Then reboot the Raspberry Pi with: ",(0,n.jsx)(i.code,{children:"sudo reboot"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"setup-the-keys-mapping",children:"Setup the keys mapping"}),"\n",(0,n.jsxs)(i.p,{children:["You need to edit the ",(0,n.jsx)(i.code,{children:"/boot/config.txt"})," file to set key mappings for the Picade Arcade. We display our example hereafter, but you can find all ",(0,n.jsx)(i.a,{href:"https://github.com/torvalds/linux/blob/master/include/uapi/linux/input-event-codes.h",children:"key codes in their definition file"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Open the config file: ",(0,n.jsx)(i.code,{children:"vim /boot/config.txt"})," and add the following under ",(0,n.jsx)(i.code,{children:"[all]"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"[all]\ndtoverlay=picade # should already be present\ndtparam=escape=114 # volume down\ndtparam=enter=115 # volume up\ndtparam=start=25 # p\ndtparam=coin=113 # mute\ndtparam=button1=24 # o\ndtparam=button4=37 # k\ndtparam=up=17 \ndtparam=down=31\ndtparam=left=30\ndtparam=right=32\ndtparam=button2=23 # i\ndtparam=button3=22 # u\ndtparam=button5=36 # j\ndtparam=button6=35 # h\n"})}),"\n",(0,n.jsx)(i.h2,{id:"start-fullscreen-browser-with-game-on-boot",children:"Start fullscreen browser with game on boot"}),"\n",(0,n.jsxs)(i.p,{children:["We have used ",(0,n.jsx)(i.strong,{children:"autostart"})," to run the browser at boot since it is a GUI application."]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Open a new file with: ",(0,n.jsx)(i.code,{children:"vim /etc/xdg/autostart/game-browser.desktop"})," (the ",(0,n.jsx)(i.code,{children:".desktop"})," extension is important!)"]}),"\n",(0,n.jsx)(i.li,{children:"Write the following inside:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"[Desktop Entry]\nName=Chrome\nExec=chromium-browser --noerrors --disable-session-crashed-bubble --disable-infobars --kiosk http://localhost --incognito\n"})}),"\n",(0,n.jsxs)(i.p,{children:["We need the ",(0,n.jsx)(i.code,{children:"--noerrors --disable-session-crashed-bubble --disable-infobars --incognito"})," options to avoid the \u201crestore pages\u201d pop-up after reboot. The ",(0,n.jsx)(i.code,{children:"--kiosk"})," option prevents displaying the \u201cPress F11 to exit fullscreen\u201d message at boot."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsxs)(i.a,{href:"https://gist.github.com/kebetsi/f251cbf6dac7a4a6dcf74a0e9e177665",children:["The default ",(0,n.jsx)(i.code,{children:"index.html"})]})," file provided in Unity\u2019s WebGL build does not display the game in fullscreen. We had to change the ",(0,n.jsx)(i.code,{children:"body"})," in the ",(0,n.jsx)(i.code,{children:"/home/pi/game/${game-directory}/index.html"})," file to this:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-html",children:"<body>\n <div class=\u201dwebgl-content\u201d>\n   <div id=\u201dunityContainer\u201d style=\u201dwidth: 1152px; height: 864px\u201d>\n   </div>\n </div>\n</body>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["The values for ",(0,n.jsx)(i.code,{children:"width"})," and ",(0,n.jsx)(i.code,{children:"length"})," have been set according to the Picade screen. We have also removed the footer with the Unity logo."]}),"\n",(0,n.jsxs)(i.p,{children:["You can find the full example: ",(0,n.jsx)(i.a,{href:"https://gist.github.com/kebetsi/ba6c60c653257e04cbb866080ed96e02",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"fix-sound",children:"Fix sound"}),"\n",(0,n.jsx)(i.p,{children:"Booting chromium in kiosk mode has muted the sound on the Raspberry. This required the player to unmute the game to activate the sound after each boot. We have done the following to ensure it is on:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Unmute the game manually with the mouse"}),"\n",(0,n.jsxs)(i.li,{children:["Save the setting by running: ",(0,n.jsx)(i.code,{children:"sudo alsactl store"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"We still require to press any button from the start screen to activate sound, which seems to be the case because we\u2019re out of focus from the chromium window, but we deemed it sufficient."}),"\n",(0,n.jsx)(i.h2,{id:"cleanup-background-to-display-on-load",children:"Cleanup background to display on load"}),"\n",(0,n.jsx)(i.p,{children:"When the Raspberry Pi will boot, we do not wish to display the default Raspberry Pi OS desktop, but a custom image."}),"\n",(0,n.jsx)(i.p,{children:"Setup the wallpaper you wish by going:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"Preferences Menu > Raspberry Pi Configuration > Desktop Tab > Picture\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Hide the trash icon by unchecking ",(0,n.jsx)(i.code,{children:"Wastebasket"})," in the same menu."]}),"\n",(0,n.jsxs)(i.p,{children:["Finally we have hidden the taskbar by right-clicking on it, then on ",(0,n.jsx)(i.code,{children:"Panel Settings"}),", then going to the ",(0,n.jsx)(i.code,{children:"Advanced"})," tab and checking ",(0,n.jsx)(i.code,{children:"Minimize panel when not in use"}),". We have also set its default size to a minimum by setting its ",(0,n.jsx)(i.code,{children:"width"})," to ",(0,n.jsx)(i.code,{children:"0%"})," and ",(0,n.jsx)(i.code,{children:"height"})," to the minimum ",(0,n.jsx)(i.code,{children:"16 pixels"}),". It slightly appears on the top left corner, but it was sufficient for our use case."]}),"\n",(0,n.jsx)(i.h2,{id:"hide-mouse-tracker",children:"Hide mouse tracker"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Open the GUI config file: ",(0,n.jsx)(i.code,{children:"vim /etc/lightdm/lightdm.conf"})]}),"\n",(0,n.jsxs)(i.li,{children:["under ",(0,n.jsx)(i.code,{children:"[Seat:*]"}),", add the following line: ",(0,n.jsx)(i.code,{children:"xserver-command=X -nocursor"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"This makes the mouse tracker invisible, but you are still be able to use it if needed."}),"\n",(0,n.jsx)(i.h2,{id:"the-result",children:"The result"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://www.youtube.com/watch?v=ZARZHkZeiZA",children:"Booting the Raspberry Pi directly into the game"})}),"\n",(0,n.jsx)(i.h2,{id:"try-the-game",children:"Try the game"}),"\n",(0,n.jsxs)(i.p,{children:["We have published the game online, ",(0,n.jsx)(i.a,{href:"https://astro.toys/Kekkon-Quest/",children:"you can try it here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"sources",children:"Sources"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Raspberry Pi imager: ",(0,n.jsx)(i.a,{href:"https://www.raspberrypi.org/software/",children:"https://www.raspberrypi.org/software/"})]}),"\n",(0,n.jsxs)(i.li,{children:["Connect to Raspberry via WiFi: ",(0,n.jsx)(i.a,{href:"https://medium.com/@nikosmouroutis/how-to-setup-your-raspberry-pi-and-connect-to-it-through-ssh-and-your-local-wifi-ac53d3839be9",children:"https://medium.com/@nikosmouroutis/how-to-setup-your-raspberry-pi-and-connect-to-it-through-ssh-and-your-local-wifi-ac53d3839be9"})]}),"\n",(0,n.jsxs)(i.li,{children:["Install NGINX on Raspberry Pi: ",(0,n.jsx)(i.a,{href:"https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md",children:"https://www.raspberrypi.org/documentation/remote-access/web-server/nginx.md"})]}),"\n",(0,n.jsxs)(i.li,{children:["Install Picade driver: ",(0,n.jsx)(i.a,{href:"https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-picade-hat",children:"https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-picade-hat"})]}),"\n",(0,n.jsxs)(i.li,{children:["Setup Picade keys mapping: ",(0,n.jsx)(i.a,{href:"https://github.com/pimoroni/picade-hat",children:"https://github.com/pimoroni/picade-hat"})]}),"\n",(0,n.jsxs)(i.li,{children:["Stop \u201crestore pages\u201d pop-up: ",(0,n.jsx)(i.a,{href:"https://www.raspberrypi.org/forums/viewtopic.php?t=212015",children:"https://www.raspberrypi.org/forums/viewtopic.php?t=212015"})]}),"\n",(0,n.jsxs)(i.li,{children:["Unmute sound: ",(0,n.jsx)(i.a,{href:"https://www.raspberrypi.org/forums/viewtopic.php?t=169216",children:"https://www.raspberrypi.org/forums/viewtopic.php?t=169216"})]}),"\n",(0,n.jsxs)(i.li,{children:["Hide Mouse: ",(0,n.jsx)(i.a,{href:"https://www.raspberrypi.org/forums/viewtopic.php?t=234879",children:"https://www.raspberrypi.org/forums/viewtopic.php?t=234879"})]}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5072:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/imager-85de585e303e47bbcabf62454330082b.webp"},6541:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/picade-96485b7c25f2a49c73fe61a959ad620c.webp"},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var n=t(6540);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);