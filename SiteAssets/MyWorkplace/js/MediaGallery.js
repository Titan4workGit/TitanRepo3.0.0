var a0_0x386692=a0_0xc199;function a0_0xc199(_0x5436db,_0x2f50d9){var _0x40e55f=a0_0x40e5();return a0_0xc199=function(_0xc19964,_0x36319a){_0xc19964=_0xc19964-0x86;var _0x4db732=_0x40e55f[_0xc19964];return _0x4db732;},a0_0xc199(_0x5436db,_0x2f50d9);}(function(_0x55a4a5,_0x1c04c8){var _0x139e91=a0_0xc199,_0x217613=_0x55a4a5();while(!![]){try{var _0x57ac77=parseInt(_0x139e91(0xe8))/0x1+-parseInt(_0x139e91(0xd0))/0x2+-parseInt(_0x139e91(0xf3))/0x3+-parseInt(_0x139e91(0xa2))/0x4+-parseInt(_0x139e91(0xe3))/0x5+parseInt(_0x139e91(0xd2))/0x6*(parseInt(_0x139e91(0x89))/0x7)+parseInt(_0x139e91(0xed))/0x8;if(_0x57ac77===_0x1c04c8)break;else _0x217613['push'](_0x217613['shift']());}catch(_0x249057){_0x217613['push'](_0x217613['shift']());}}}(a0_0x40e5,0x510fd));var currentAlbumSiteUrl='',companyID='',albumPlace='',albumDate='',Description='',existingAlbumArrayList=new Array();$(document)[a0_0x386692(0xc1)](function(){var _0x2a25a6=a0_0x386692;EnvironmentalSettingsItems(),$(_0x2a25a6(0xde))['attr'](_0x2a25a6(0x9f),'../Pages/MagazineViewAll.aspx?WebAppId=2'),$(_0x2a25a6(0xbc))[_0x2a25a6(0x94)](_0x2a25a6(0x9f),_0x2a25a6(0xe5));});var mediacheck=!![],magazineCheck=!![];function EnvironmentalSettingsItems(){var _0x51af8a=a0_0x386692,_0x24326b='?$select=Title,Id,Active&$filter=(Formats\x20eq\x20\x27Format\x202\x27\x20and\x20Title\x20eq\x20\x27Magazine\x27)\x20or\x20(Formats\x20eq\x20\x27Format\x202\x27\x20and\x20Title\x20eq\x20\x27Media\x20Gallery\x27)';$[_0x51af8a(0xf1)](CommonFunction['getItemsWithQueryItem'](_0x51af8a(0xf0),_0x24326b))[_0x51af8a(0xaa)](function(_0x2f34ac){var _0x4639aa=_0x51af8a;try{if(_0x2f34ac[_0x4639aa(0x95)][_0x4639aa(0xad)]>0x0){for(var _0x24ed90=0x0;_0x24ed90<_0x2f34ac[_0x4639aa(0x95)][_0x4639aa(0xad)];_0x24ed90++){_0x2f34ac[_0x4639aa(0x95)][_0x24ed90][_0x4639aa(0xcc)]==_0x4639aa(0xe7)&&_0x2f34ac[_0x4639aa(0x95)][_0x24ed90]['Active']==!![]&&(LoadRequestDetails(),$(_0x4639aa(0x9d))[_0x4639aa(0xdb)](),magazineCheck=![]),_0x2f34ac[_0x4639aa(0x95)][_0x24ed90][_0x4639aa(0xcc)]==_0x4639aa(0xbe)&&_0x2f34ac[_0x4639aa(0x95)][_0x24ed90][_0x4639aa(0xc8)]==!![]&&(InitializationMediaSlider(),$('#MediaDiv')[_0x4639aa(0xdb)](),mediacheck=![]);}mediacheck==!![]&&$(_0x4639aa(0x9b))[_0x4639aa(0x86)](_0x4639aa(0x9c)),magazineCheck==!![]&&$(_0x4639aa(0xae))['addClass']('work-doc-responsive-height');}else $(_0x4639aa(0x9b))['addClass'](_0x4639aa(0x9c)),$(_0x4639aa(0xae))['addClass'](_0x4639aa(0xc0));}catch(_0x384ba0){alert(_0x4639aa(0x9e));}});}$(window)[a0_0x386692(0xe9)](function(){var _0x4b38c5=a0_0x386692,_0x3b66a0=titanForWork['getQueryStringParameter'](_0x4b38c5(0xeb));if(_0x3b66a0!=undefined){}});function MediaGalleryInitialization(){}function InitializationMediaSlider(){var _0x237992=a0_0x386692;companyID=Logged_CompanyId;var _0x4818a5=titanForWork[_0x237992(0xf5)](companyID);currentAlbumSiteUrl=_0x4818a5,GetMediaGallery(_0x4818a5,_0x237992(0xac));}var mediaGalleryCounter=0x0;function GetMediaGallery(_0x2b430e,_0x50f9ea){var _0x22a3eb=a0_0x386692,_0x4518ad=_0x2b430e+_0x22a3eb(0xa0);$[_0x22a3eb(0x9a)]({'url':_0x4518ad,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x58eb62){var _0x1f5e2a=_0x22a3eb,_0x40ad2a=_0x58eb62['d'][_0x1f5e2a(0x95)];$(_0x1f5e2a(0xd5))[_0x1f5e2a(0xc5)]('');for(var _0xfa4792=0x0;_0xfa4792<_0x40ad2a['length'];_0xfa4792++){if(_0x40ad2a[_0xfa4792][_0x1f5e2a(0xdd)]!=_0x1f5e2a(0xcb)&&_0x40ad2a[_0xfa4792][_0x1f5e2a(0xdd)]!='_t'&&_0x40ad2a[_0xfa4792][_0x1f5e2a(0xdd)]!='_w'){var _0xd37240=encodeURI(_0x40ad2a[_0xfa4792]['ServerRelativeUrl']),_0x3e3485=_0x40ad2a[_0xfa4792][_0x1f5e2a(0xdd)],_0x4c7372='';$[_0x1f5e2a(0xf1)](GetAlbumCaptionDescription(_0x2b430e,_0x3e3485))[_0x1f5e2a(0xaa)](function(_0x13a986){var _0x54d08e=_0x1f5e2a;_0x13a986[_0x54d08e(0xad)]>0x0&&(albumPlace=_0x13a986[0x0]['Event_Place'],Description=_0x13a986[0x0][_0x54d08e(0x88)],albumDate=_0x13a986[0x0][_0x54d08e(0xcd)]),norecordMedia++,GetMediaGalleryThumbNail(_0x2b430e,_0xd37240,_0x3e3485,albumPlace,albumDate,Description);});}}if(norecordMedia==0x0){langblankMessage='Keep\x20watching\x20for\x20upcoming\x20albums';var _0x320634=_0x1f5e2a(0xbd)+langblankMessage+_0x1f5e2a(0xb4);$(_0x1f5e2a(0xd1))[_0x1f5e2a(0xe0)](),$('#media-body-div')[_0x1f5e2a(0xb1)](_0x320634);}},'eror':function(_0x52ad16){var _0x115346=_0x22a3eb;console[_0x115346(0xc6)]('error');}});}var norecordMedia=0x0;function GetMediaGalleryThumbNail(_0x16151d,_0x3eb6d0,_0x45280d,_0x548c44,_0x16c87c,_0x2aab9b){var _0x237641=a0_0x386692,_0x16c87c=new Date(_0x16c87c);_0x45280d[_0x237641(0xad)]>0x26&&(_0x45280d=_0x45280d[_0x237641(0xa8)](0x0,0x24)+'...');_0x2aab9b[_0x237641(0xad)]>0x24&&(_0x2aab9b=_0x2aab9b[_0x237641(0xa8)](0x0,0x24)+_0x237641(0xb0));var _0x631712=''+_spPageContextInfo[_0x237641(0xb7)]+'/Pages/MediaGalleryDetail.aspx?WebAppId='+companyID+_0x237641(0x98)+_0x3eb6d0+'&Mode=View&sourcelocation=../Pages/Default.aspx',_0x16c87c=$[_0x237641(0x96)][_0x237641(0x8d)](_0x237641(0x8c),_0x16c87c),_0x4f54d7=_0x16151d+_0x237641(0xf6)+_0x3eb6d0+'\x27)?$select=ID,File_x0020_Type&$expand=Folders,Folders/ListItemAllFields,Files,Files/ListItemAllFields&$orderby=Modified\x20desc&$top=1';$[_0x237641(0x9a)]({'url':_0x4f54d7,'headers':{'Accept':_0x237641(0xee)},'async':![],'success':function(_0x5d00de){var _0x3661f9=_0x237641,_0x316860=_0x5d00de['d'][_0x3661f9(0xc3)][_0x3661f9(0x95)],_0x1222e7='';_0x316860[_0x3661f9(0x8f)](function(_0x240a56,_0x324687){var _0x5b08fa=_0x3661f9,_0x399465=new Date(_0x240a56[_0x5b08fa(0x92)]),_0x162886=new Date(_0x324687[_0x5b08fa(0x92)]);if(_0x399465<_0x162886)return-0x1;if(_0x399465>_0x162886)return 0x1;return 0x0;});var _0x358d68='';_0x316860[_0x3661f9(0xad)]>0x0&&(_0x1222e7=encodeURI(_0x316860[0x0][_0x3661f9(0x8e)]),norecordMedia++);_0x1222e7==''&&(_0x1222e7=_0x3661f9(0x87));var _0xe65f10=_0x1222e7[_0x3661f9(0xd7)]('.');_0xe65f10=_0xe65f10[_0xe65f10[_0x3661f9(0xad)]-0x1],_0x358d68+=_0x3661f9(0xa7);_0xe65f10==_0x3661f9(0xc4)||_0xe65f10==_0x3661f9(0x99)||_0xe65f10==_0x3661f9(0xc2)||_0xe65f10==_0x3661f9(0xd8)||_0xe65f10==_0x3661f9(0xb3)||_0xe65f10=='BMP'||_0xe65f10==_0x3661f9(0xa9)||_0xe65f10==_0x3661f9(0xdc)||_0xe65f10=='png'||_0xe65f10==_0x3661f9(0xdf)?_0x358d68+='<a\x20href='+_0x631712+_0x3661f9(0x93)+_0x1222e7+_0x3661f9(0xa1):_0x358d68+=_0x3661f9(0x97)+_0x631712+_0x3661f9(0xd3);_0x358d68+=_0x3661f9(0xd4),_0x358d68+=_0x3661f9(0xb5),_0x358d68+=_0x3661f9(0xb9),_0x358d68+=_0x3661f9(0xe2)+_0x45280d+_0x3661f9(0xaf),_0x358d68+=_0x3661f9(0xd6),_0x358d68+='<p><span>'+_0x16c87c+_0x3661f9(0xc9),_0x358d68+=_0x3661f9(0x97)+_0x631712+_0x3661f9(0xb6)+_0x548c44+'</span></p></a>',_0x358d68+='<a\x20href='+_0x631712+_0x3661f9(0xa6)+_0x2aab9b+'</span></p></a>',_0x358d68+='</div></div></div></div></div>',$(_0x3661f9(0xd5))[_0x3661f9(0xb1)](_0x358d68);if(norecordMedia==0x0){var _0x528822=_0x3661f9(0x90),_0x34f7f5=_0x3661f9(0xb8)+_0x528822+'</h3></div>';$(_0x3661f9(0xd1))[_0x3661f9(0xe0)](),$(_0x3661f9(0xd1))[_0x3661f9(0xb1)](_0x34f7f5);}},'eror':function(_0x3f38b1){console['log']('error');}});}function BindAlbumDropDownList(_0x401d2a){var _0x3a8acc=a0_0x386692;existingAlbumArrayList=[];var _0x1ef75d=_0x401d2a+'/_api/web/Lists/Getbytitle(\x27MediaGallery\x27)/rootfolder/folders?$select=Name,ServerRelativeUrl&$top=5000';$[_0x3a8acc(0x9a)]({'url':_0x1ef75d,'headers':{'Accept':_0x3a8acc(0xee)},'async':!![],'success':function(_0x2b64ae){var _0x480166=_0x3a8acc,_0x4cf34b=_0x2b64ae['d'][_0x480166(0x95)];for(var _0x3ea5fb=0x0;_0x3ea5fb<_0x4cf34b[_0x480166(0xad)];_0x3ea5fb++){if(_0x4cf34b[_0x3ea5fb][_0x480166(0xdd)]!=_0x480166(0xcb)&&_0x4cf34b[_0x3ea5fb][_0x480166(0xdd)]!='_t'&&_0x4cf34b[_0x3ea5fb]['Name']!='_w'){var _0x5c9980=_0x4cf34b[_0x3ea5fb][_0x480166(0xdd)];existingAlbumArrayList[_0x480166(0x91)](_0x5c9980[_0x480166(0xba)]());}}},'eror':function(_0x23b3df){var _0x4d63a9=_0x3a8acc;console[_0x4d63a9(0xc6)](_0x4d63a9(0xea));}});}function GetAlbumCaptionDescription(_0x2725f1,_0x3bdef6){var _0x511b6e=a0_0x386692,_0x13e55a=$[_0x511b6e(0xef)](),_0x22d03d=_0x2725f1+_0x511b6e(0xbf)+_0x3bdef6+'\x27';return $['ajax']({'url':_0x22d03d,'headers':{'Accept':_0x511b6e(0xee)},'async':![],'success':function(_0x4e5481){var _0x595f43=_0x511b6e;_0x13e55a[_0x595f43(0xa5)](_0x4e5481['d'][_0x595f43(0x95)]);},'eror':function(_0x287aea){var _0x131ab0=_0x511b6e;console[_0x131ab0(0xc6)]('error'),_0x13e55a[_0x131ab0(0xce)](_0x287aea);}}),_0x13e55a['promise']();}function LoadRequestDetails(){var _0x6622e9=a0_0x386692,_0x4ee4dd=titanForWork[_0x6622e9(0xf5)](Logged_CompanyId),_0x3df8d0=_0x4ee4dd+'/_api/web/lists/getbytitle(\x27Magazine_items\x27)/items?$orderby=\x20Publish_Date\x20desc&$orderby=Volume\x20desc&$expand=AttachmentFiles&$top=6';$['ajax']({'url':_0x3df8d0,'method':'GET','async':![],'headers':{'Accept':_0x6622e9(0xbb)},'success':function(_0x48b1a2){var _0x151743=_0x6622e9,_0x44564d=_0x48b1a2['d'][_0x151743(0x95)],_0xdf3bfe=[],_0x402143=0x0,_0x53a9f8='',_0x19c4c0='',_0xb7bd3c='',_0x480624='';for(var _0x14a88e=0x0;_0x14a88e<_0x44564d[_0x151743(0xad)];_0x14a88e++){_0x402143++;var _0x70e24f='',_0xe04d9d=_0x44564d[_0x14a88e]['File']['Name'],_0x3e912d='',_0xfc267f='';_0x44564d[_0x14a88e][_0x151743(0x8a)][_0x151743(0x95)][_0x151743(0xad)]>0x1&&(_0x44564d[_0x14a88e][_0x151743(0x8a)][_0x151743(0x95)][0x0][_0x151743(0xe4)][_0x151743(0xc7)](_0x151743(0xcf))==-0x1?(_0x3e912d=_0x44564d[_0x14a88e]['AttachmentFiles'][_0x151743(0x95)][0x0][_0x151743(0x8e)],_0xfc267f=_0x44564d[_0x14a88e][_0x151743(0x8a)][_0x151743(0x95)][0x1][_0x151743(0x8e)]):(_0x3e912d=_0x44564d[_0x14a88e][_0x151743(0x8a)]['results'][0x1][_0x151743(0x8e)],_0xfc267f=_0x44564d[_0x14a88e][_0x151743(0x8a)][_0x151743(0x95)][0x0][_0x151743(0x8e)]));var _0x2f27de=new Date(_0x44564d[_0x14a88e][_0x151743(0xb2)]),_0x136cfb=$[_0x151743(0x96)][_0x151743(0x8d)](_0x151743(0x8c),_0x2f27de);_0x3e912d==''&&(_0x3e912d=_0x151743(0xe1));var _0x42c507=_0x44564d[_0x14a88e][_0x151743(0xcc)],_0x217b67=_0x44564d[_0x14a88e][_0x151743(0xcc)],_0x24fd62=_0x44564d[_0x14a88e]['Volume']==null?'':_0x44564d[_0x14a88e]['Volume'];_0x42c507[_0x151743(0xad)]>0xc&&(_0x42c507=_0x42c507['substring'](0x0,0x22)+_0x151743(0xb0)),_0x70e24f+=_0x151743(0xf2),_0x70e24f+=_0x151743(0xa3)+_0xfc267f+'\x22>',_0x70e24f+='<img\x20class=\x22media-gallery-card-img\x22\x20src=\x22'+_0x3e912d+_0x151743(0x8b),_0x70e24f+=_0x151743(0xec),_0x70e24f+=_0x151743(0xd4),_0x70e24f+=_0x151743(0xb5),_0x70e24f+=_0x151743(0xb9),_0x70e24f+='<a\x20target=\x22_blank\x22\x20href=\x22'+_0xfc267f+'\x22>',_0x70e24f+=_0x151743(0xe2)+_0x42c507+'</h5>',_0x70e24f+=_0x151743(0xd6),_0x70e24f+=_0x151743(0xda)+_0x136cfb+_0x151743(0xc9),_0x70e24f+=_0x151743(0xca)+_0x24fd62+_0x151743(0xa4),_0x70e24f+=_0x151743(0xf7),$(_0x151743(0xab))[_0x151743(0xb1)](_0x70e24f);}if(_0x402143==0x0){var _0x180b94=_0x151743(0xe6),_0x318d42=_0x151743(0xb8)+_0x180b94+_0x151743(0xb4);$(_0x151743(0xd9))[_0x151743(0xe0)](),$('.panel-footer-WorkplaceMagazine')[_0x151743(0xf4)](),$(_0x151743(0xd9))[_0x151743(0xb1)](_0x318d42);}else{}}});}function a0_0x40e5(){var _0xedc560=['<p><span>','show','gif','Name','#magazineview','bmp','empty','https://cdn.jsdelivr.net/gh/Titan4workGit/TitanRepo3.0@latest/SiteAssets/MyWorkplace/images/magazines2.png','<h5>','1702810UjWarR','FileName','../Pages/MediaGallery.aspx?WebAppId=2','Keep\x20watching\x20for\x20upcoming\x20magazines','Magazine','502524lDruuH','load','error','WelcomePageCalled','</a>','5815864JuYhaK','application/json;odata=verbose','Deferred','EnvironmentalSettings','when','<div\x20class=\x22slide\x20image-active\x22><div\x20class=\x22media-gallery-card-panel\x22>','99720FOHyQW','hide','currentCompanyUrl','/_api/Web/GetFolderByServerRelativeUrl(\x27','</div></div></div></div></div>','addClass','https://cdn.jsdelivr.net/gh/Titan4workGit/TitanRepo3.0@latest/SiteAssets/MediaGallery/assets/images/default%20album.png','Description','56PrLRKw','AttachmentFiles','\x22\x20alt=\x22media\x20img\x22>','MM\x20dd,\x20yy','formatDate','ServerRelativeUrl','sort','Keep\x20watching\x20for\x20upcoming\x20Album','push','TimeLastModified','><img\x20src=\x22','attr','results','datepicker','<a\x20href=','&FName=','JPG','ajax','.knowledge_document_main_box','work-know-responsive-height','#magazineBodyDiv','Recommended\x20to\x20clear\x20the\x20browsing\x20data\x20and\x20cookies\x20for\x20smooth\x20and\x20fast\x20browsing.\x20Please\x20press\x20Ctrl\x20+\x20H\x20to\x20clear\x20cookies.','href','/_api/web/Lists/Getbytitle(\x27MediaGallery\x27)/rootfolder/folders?$select=*,Name,TimeLastModified,ServerRelativeUrl&$top=6&$orderby=TimeLastModified\x20desc','\x22\x20alt=\x22media\x20img\x22\x20class=\x22media-gallery-card-img\x22></a>','2012808KppQtQ','<a\x20target=\x22_blank\x22\x20href=\x22','</span></p></a>','resolve','><p><span>Description:</span>\x20<span>','<div\x20class=\x22slide\x22><div\x20class=\x22media-gallery-card-panel\x22>','substring','jpeg','done','#slider-container2','MediaGallery','length','.documents_main_box','</h5>','...','append','Publish_Date','PNG','</h3></div>','<div\x20class=\x22blur\x22></div>','><p><span>Place:</span>\x20<span>','webAbsoluteUrl','<div\x20class=\x22magazineNoRecord\x20col-sm-12\x20col-xs-12\x20col-md-12\x22><h3\x20class=\x22top5\x22\x20data-localize=\x22NoRecord_Magazine\x22>','<div\x20class=\x22caption-text\x22>','toLowerCase','application/json;\x20odata=verbose','#viewmedia-1','<div\x20class=\x22albumNoRecord\x20col-sm-12\x20col-xs-12\x20col-md-12\x22><h3\x20class=\x22top5\x22\x20data-localize=\x22NoRecord_MediaGallery\x22>','Media\x20Gallery','/_api/web/lists/getbytitle(\x27MediaGallery\x27)/items?$select=*,Title,Description&$filter=Title\x20eq\x20\x27','work-doc-responsive-height','ready','JPEG','Files','jpg','html','log','indexOf','Active','</span></p>','<p><span>Volume:</span>\x20<span>','Forms','Title','Modified','reject','.pdf','887252AfOTLM','#media-body-div','317364eEYqVg','><img\x20src=\x22https://cdn.jsdelivr.net/gh/Titan4workGit/TitanRepo3.0@latest/SiteAssets/MyDocuments/DMS/assets/images/video-files.png?isSPOFile=1\x22\x20alt=\x22media\x20img\x22\x20class=\x22media-gallery-card-img\x20videoThumbView\x22></a>','<div\x20class=\x22caption\x22>','#slider-container','<div\x20class=\x22slide-content-media\x22>','split','GIF','#magazine-body-div'];a0_0x40e5=function(){return _0xedc560;};return a0_0x40e5();}