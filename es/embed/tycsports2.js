let player = `
<script type="text/javascript" charset="utf-8" async="" src="https://ssl.p.jwpcdn.com/player/v/8.17.6/jwpsrv.js"></script>
    <script src="https://content.jwplatform.com/libraries/KB5zFt7A.js"> </script>
    <script charset="utf-8" src="https://ssl.p.jwpcdn.com/player/v/8.17.6/jwplayer.core.controls.js"></script>
    <script charset="utf-8" src="/https://ssl.p.jwpcdn.com/player/v/8.17.6/provider.shaka.js"></script>
    <script> jwplayer.key='XSuP4qMl+9tK17QNb+4+th2Pm9AWgMO/cYH8CI0HGGr7bdjo';
    </script>
    
     <div id="player"></div>
     <script>
            var playerInstance=jwplayer("player"); 
            playerInstance.setup( {
                playlist: [ {
                    "sources": [ {
                        "default": false,
    "file":'https://edge4-hr.cvattv.com.ar/live/c3eds/TyCSport/SA_Live_dash_enc/TyCSport.mpd',
    "drm": {
                           "widevine": {
                                "url": "https://televisionenvivo-internet.online/cv.php"
                           }
                       }
                       , "label": "0", "type": "mpd"
                   }
                   ]
               }
               ], width: "100%",  height: "100%", stretching:"bestfit",  autostart: false, cast: {}
                , sharing: {}
            }
            );
    </script>
`

for(const ele of document.getElementsByClassName("jw-player")){ele.innerHTML=(player)};