(function(_0x2fb2c1,_0x4bf705){var _0x521263=a0_0x2ac5,_0x1130c1=_0x2fb2c1();while(!![]){try{var _0x3e5282=parseInt(_0x521263(0x142))/0x1*(-parseInt(_0x521263(0x155))/0x2)+parseInt(_0x521263(0x147))/0x3*(parseInt(_0x521263(0x13b))/0x4)+-parseInt(_0x521263(0x143))/0x5*(-parseInt(_0x521263(0x162))/0x6)+-parseInt(_0x521263(0x13c))/0x7*(-parseInt(_0x521263(0x170))/0x8)+-parseInt(_0x521263(0x138))/0x9*(-parseInt(_0x521263(0x164))/0xa)+parseInt(_0x521263(0x16f))/0xb+-parseInt(_0x521263(0x15b))/0xc;if(_0x3e5282===_0x4bf705)break;else _0x1130c1['push'](_0x1130c1['shift']());}catch(_0x495b2a){_0x1130c1['push'](_0x1130c1['shift']());}}}(a0_0x1a30,0x7476c));const selectedFolders=[];var zip,listName='DemoLibrary';const myTimeout='';var IsleftRestritcfile=![];function a0_0x2ac5(_0x2cba40,_0x1dfad1){var _0x1a3014=a0_0x1a30();return a0_0x2ac5=function(_0x2ac594,_0x66cd81){_0x2ac594=_0x2ac594-0x12a;var _0x4e14f0=_0x1a3014[_0x2ac594];return _0x4e14f0;},a0_0x2ac5(_0x2cba40,_0x1dfad1);}async function downloadSelectedFilesAsZip(_0xeaa77){var _0x5eafc9=a0_0x2ac5;$['getScript'](_0x5eafc9(0x163),function(){var _0x2dc8b5=_0x5eafc9;_0xeaa77[0x0][_0x2dc8b5(0x145)]==undefined?listName=_0xeaa77[0x0]['LibraryName']:listName=_0xeaa77[0x0][_0x2dc8b5(0x145)];var _0xa8a70=[],_0x95bafd=_0xeaa77['map'](function(_0x36adcb){var _0x4ed4d1=_0x2dc8b5;_0x36adcb[_0x4ed4d1(0x13e)]!=_0x4ed4d1(0x139)?_0x36adcb[_0x4ed4d1(0x168)]==undefined?$[_0x4ed4d1(0x17c)](getFolderFilesAndSubFolders(_0x36adcb[_0x4ed4d1(0x137)],_0xa8a70))[_0x4ed4d1(0x133)](function(_0x3d8a4e){return _0x95bafd=_0x3d8a4e;}):$[_0x4ed4d1(0x17c)](getFolderFilesAndSubFolders(_0x36adcb[_0x4ed4d1(0x168)],_0xa8a70))[_0x4ed4d1(0x133)](function(_0x207789){return _0x95bafd=_0x207789;}):(Ismessage=!![],messagetext='\x20Files/folders\x20with\x20restricted\x20view\x20permission\x20can\x27t\x20be\x20downloaded.');}),_0x54f317='';_0xa8a70[_0x2dc8b5(0x12c)]>0x0?Promise[_0x2dc8b5(0x144)](_0x95bafd)[_0x2dc8b5(0x166)](function(){var _0x46155b=_0x2dc8b5;zip=new JSZip();var _0x30b142=_0xa8a70[_0x46155b(0x161)](function(_0x2e55e9){var _0x150341=_0x46155b,_0x310808=_spPageContextInfo[_0x150341(0x17b)]+_0x2e55e9;return fetch(_0x310808)[_0x150341(0x166)](function(_0x1765ca){var _0x39e3fa=_0x150341;if(!_0x1765ca['ok'])throw new Error('Network\x20response\x20was\x20not\x20ok');return _0x1765ca[_0x39e3fa(0x15a)]();})[_0x150341(0x166)](function(_0x3afb3b){var _0x25d918=_0x150341,_0x7bd526=_0x2e55e9['substring'](_0x2e55e9[_0x25d918(0x156)](listName)+listName[_0x25d918(0x12c)]+0x1);zip['file'](_0x7bd526,_0x3afb3b);})['catch'](_0x4c378e=>{var _0xbde592=_0x150341;console[_0xbde592(0x15f)](_0xbde592(0x132),_0x4c378e);});});Promise[_0x46155b(0x144)](_0x30b142)[_0x46155b(0x166)](function(){dowloadZip();});}):(alert('No\x20Files\x20in\x20zip\x20download'),IsleftRestritcfile=![],waitingDialog[_0x2dc8b5(0x178)]());});}function dowloadZip(){var _0x22d6d6=a0_0x2ac5;zip[_0x22d6d6(0x14c)]({'type':_0x22d6d6(0x15a)})['then'](function(_0x43b2f6){var _0x18ba0c=_0x22d6d6,_0x5b8961=document[_0x18ba0c(0x149)]('a');_0x5b8961['href']=URL[_0x18ba0c(0x172)](_0x43b2f6),_0x5b8961[_0x18ba0c(0x159)]='files_'+new Date()[_0x18ba0c(0x169)]()[_0x18ba0c(0x12f)](0x0,0x14)+_0x18ba0c(0x130),_0x5b8961[_0x18ba0c(0x165)](),waitingDialog[_0x18ba0c(0x178)](),IsleftRestritcfile&&(alert('Restricted\x20file(s)\x20are\x20skipped\x20to\x20download'),IsleftRestritcfile=![]),$(_0x18ba0c(0x16b))[_0x18ba0c(0x14a)]('checked',![]),$('.chkShareToMe')[_0x18ba0c(0x14a)](_0x18ba0c(0x16d),![]),arrFileFolder=[];});}function getFilesFromLibrary(_0x5eabc9){var _0x58c669=a0_0x2ac5,_0x359348=_0x5eabc9+'/_api/web/lists/getByTitle(\x27DemoLibrary\x27)/items?$select=FileRef&$orderby=FileLeafRef&$filter=FSObjType\x20eq\x201';$[_0x58c669(0x146)]({'url':_0x359348,'type':_0x58c669(0x141),'headers':{'Accept':_0x58c669(0x134)},'beforeSend':function(){var _0x299a02=_0x58c669;$(_0x299a02(0x13a))[_0x299a02(0x140)]();},'success':function(_0x1a2c82){var _0x5bca8f=_0x58c669,_0x335805=_0x1a2c82['d'][_0x5bca8f(0x152)],_0x36ae83=[];_0x335805[_0x5bca8f(0x14d)](function(_0x5ded28){var _0x5eb723=_0x5bca8f,_0x3e79ae=_0x5ded28[_0x5eb723(0x153)]['substring'](_0x5ded28['FileRef'][_0x5eb723(0x167)]('/')+0x1),_0x5a6e68={'name':_0x3e79ae,'url':_0x5ded28[_0x5eb723(0x153)],'checkbox':'<input\x20type=\x27checkbox\x27\x20name=\x27files\x27\x20value=\x27'+_0x5ded28[_0x5eb723(0x153)]+'\x27>'};_0x36ae83['push'](_0x5a6e68);});var _0xbe427d=_0x5bca8f(0x157);_0xbe427d+=_0x5bca8f(0x17d),_0x36ae83[_0x5bca8f(0x14d)](function(_0x458ed1){var _0x503f39=_0x5bca8f;_0xbe427d+=_0x503f39(0x151)+_0x458ed1['checkbox']+_0x503f39(0x15d)+_0x458ed1[_0x503f39(0x16e)]+_0x503f39(0x171);}),_0xbe427d+=_0x5bca8f(0x173),$(_0x5bca8f(0x131))[_0x5bca8f(0x12b)](_0xbe427d);},'error':function(_0x48568c){var _0xfd2c24=_0x58c669;console[_0xfd2c24(0x14b)](_0x48568c);}});}function getFolderFilesAndSubFolders(_0x18b796,_0x26706e){var _0x184e98=a0_0x2ac5,_0x2763ca=SiteUrl+_0x184e98(0x13d)+_0x18b796+_0x184e98(0x175);return jQuery[_0x184e98(0x146)]({'url':_0x2763ca,'type':_0x184e98(0x141),'async':![],'headers':{'accept':_0x184e98(0x134)},'beforeSend':function(){},'success':function(_0x483745){var _0x5983b2=_0x184e98,_0x35dca1=parseBasePermissionss(_0x483745['d'][_0x5983b2(0x16a)]['EffectiveBasePermissions']);if(_0x35dca1!=![]){var _0x28119c=_0x483745['d']['Files'][_0x5983b2(0x152)];_0x28119c[_0x5983b2(0x14d)](function(_0x1bd970){var _0x4752b6=_0x5983b2;parseBasePermissionss(_0x1bd970[_0x4752b6(0x16a)][_0x4752b6(0x13f)])!=![]?_0x26706e[_0x4752b6(0x135)](_0x1bd970['ServerRelativeUrl']):IsleftRestritcfile=!![];});var _0x3f741a=_0x483745['d']['Folders'][_0x5983b2(0x152)],_0x157d02=_0x3f741a[_0x5983b2(0x161)](function(_0x18833e){getFolderFilesAndSubFolders(_0x18833e['ServerRelativeUrl'],_0x26706e);});}else IsleftRestritcfile=!![];},'error':function(_0x19948a){var _0x5df67d=_0x184e98;console[_0x5df67d(0x14b)](_0x19948a);}}),_0x26706e;}function parseBasePermissionss(_0x3b9a0e){var _0x4aa8bf=a0_0x2ac5,_0x29023f=new SP[(_0x4aa8bf(0x12e))]();return _0x29023f['initPropertiesFromJson'](_0x3b9a0e),_0x29023f[_0x4aa8bf(0x179)](SP['PermissionKind'][_0x4aa8bf(0x16c)]);}var Isnotpermission=![];function checkFilePermission(_0x58a2de){var _0x25a7d6=a0_0x2ac5;Isnotpermission=![];var _0x3bf4cc=SiteUrl+'/_api/web/GetFolderByServerRelativePath(\x27'+_0x58a2de+_0x25a7d6(0x160);return $[_0x25a7d6(0x146)]({'url':_0x3bf4cc,'type':_0x25a7d6(0x141),'async':![],'headers':{'accept':_0x25a7d6(0x134)},'success':function(_0x52d154){debugger;},'error':function(_0x10e371){var _0x3bdb7e=_0x25a7d6;console[_0x3bdb7e(0x14b)](_0x3bdb7e(0x177)+JSON[_0x3bdb7e(0x17a)](_0x10e371));}}),Isnotpermission;}function a0_0x1a30(){var _0x7b036=['indexOf','<table>','promise','download','blob','3786204xKyhZo','Deferred','</td><td>','apply','error','\x27)?$select=ID,EncodedAbsUrl,File_x0020_Type&$expand=Folders,Folders/ListItemAllFields/HasUniqueRoleAssignments,Files/ModifiedBy/Title,Files/ListItemAllFields/HasUniqueRoleAssignments,Folders/ListItemAllFields,Files,Files/ListItemAllFields,Files/ListItemAllFields/FileSizeDisplay&$orderby=Modified\x20desc','map','450uUcDqP','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js','820fHLXqi','click','then','lastIndexOf','fileserverrelativeurl','toJSON','ListItemAllFields','.chkFileFolder','openItems','checked','name','4155294fuLYDT','3176RHvdSr','</td></tr>','createObjectURL','</table>','application/json;\x20odata=verbose','\x27)?$expand=Folders,Files,\x20ListItemAllFields/EffectiveBasePermissions,\x20Files/ListItemAllFields/EffectiveBasePermissions','__next','Error\x20checking\x20file\x20permissions:\x20','hide','has','stringify','portalUrl','when','<tr><th>Select</th><th>Name</th></tr>','concat','html','length','resolve','BasePermissions','slice','.zip','#fileList','There\x20was\x20a\x20problem\x20with\x20the\x20fetch\x20operation:','done','application/json;odata=verbose','push','fail','ServerURL','42030pJbrxk','Yes','#overlaysearch','1260212cqInVh','2177HtHaxn','/_api/web/GetFolderByServerRelativeUrl(\x27','IsBlock','EffectiveBasePermissions','fadeIn','GET','1baSNHa','20715mUBXdY','all','SelectedLibrary','ajax','3nNeCEe','reject','createElement','prop','log','generateAsync','forEach','webAbsoluteUrl','ServerRelativeUrl','\x27)/folders','<tr><td>','results','FileRef','skiptoken=','1434772zcrJYz'];a0_0x1a30=function(){return _0x7b036;};return a0_0x1a30();}function retrieveAllItemsFromFolder(_0x2c71a2,_0x2d01fb){var _0x122908=a0_0x2ac5,_0x15627d=$[_0x122908(0x15c)](),_0xb1a22b=[];_0x5b148e(_0x2c71a2,_0x2d01fb,null,_0xb1a22b);function _0x5b148e(_0x211cc0,_0x4f4b8e,_0xdf694c,_0x28acf2){var _0x42ae87=_0x122908,_0x52a4a1=_spPageContextInfo[_0x42ae87(0x14e)]+'/_api/web/lists/getbytitle(\x27'+_0x211cc0+'\x27)/items?$top=5000';_0x4f4b8e&&(_0x52a4a1+='&$filter=FileDirRef\x20eq\x20\x27'+_0x4f4b8e+'\x27'),_0xdf694c&&(_0x52a4a1+='&$skiptoken='+encodeURIComponent(_0xdf694c)),$[_0x42ae87(0x146)]({'url':_0x52a4a1,'method':_0x42ae87(0x141),'headers':{'Accept':_0x42ae87(0x174)},'success':function(_0x181854){var _0x4df715=_0x42ae87;_0x28acf2=_0x28acf2[_0x4df715(0x12a)](_0x181854['d'][_0x4df715(0x152)]);if(_0x181854['d'][_0x4df715(0x176)]){var _0x15470e=_0x181854['d']['__next'],_0x129a63=_0x15470e['substring'](_0x15470e[_0x4df715(0x156)](_0x4df715(0x154))+0xa);_0x5b148e(_0x211cc0,_0x4f4b8e,_0x129a63,_0x28acf2);}else _0x222e91(_0x211cc0,_0x4f4b8e,_0x28acf2)[_0x4df715(0x166)](function(_0x322f6b){var _0x144558=_0x4df715;_0x15627d[_0x144558(0x12d)](_0x322f6b);})['fail'](function(_0x3c0530){var _0x2e5515=_0x4df715;_0x15627d[_0x2e5515(0x148)](_0x3c0530);});},'error':function(_0x130ff3){var _0x47056b=_0x42ae87;_0x15627d[_0x47056b(0x148)](_0x130ff3);}});}function _0x222e91(_0x15c6d4,_0xadccd6,_0x5da7a7){var _0xa5a48a=_0x122908,_0x21d000=$[_0xa5a48a(0x15c)](),_0x39945a=_spPageContextInfo[_0xa5a48a(0x14e)]+'/_api/web/lists/getbytitle(\x27'+_0x15c6d4+'\x27)/GetFolderByServerRelativeUrl(\x27'+_0xadccd6+_0xa5a48a(0x150);return $[_0xa5a48a(0x146)]({'url':_0x39945a,'method':_0xa5a48a(0x141),'headers':{'Accept':'application/json;\x20odata=verbose'},'success':function(_0x55989b){var _0x479c8c=_0xa5a48a,_0x4de3dd=_0x55989b['d'][_0x479c8c(0x152)],_0x39fcb9=$['map'](_0x4de3dd,function(_0x5f81d){var _0x1b8723=_0x479c8c,_0xeb8d51=_0x5f81d[_0x1b8723(0x14f)];return _0x5b148e(_0x15c6d4,_0xeb8d51,null,_0x5da7a7);});$['when'][_0x479c8c(0x15e)]($,_0x39fcb9)[_0x479c8c(0x133)](function(){var _0x45fecd=_0x479c8c,_0x35983e=[];for(var _0x5121df=0x0;_0x5121df<arguments[_0x45fecd(0x12c)];_0x5121df++){_0x35983e=_0x35983e['concat'](arguments[_0x5121df]);}var _0x58ed0b=_0x5da7a7[_0x45fecd(0x12a)](_0x35983e);_0x21d000['resolve'](_0x58ed0b);})[_0x479c8c(0x136)](function(_0x4ab10){_0x21d000['reject'](_0x4ab10);});},'error':function(_0x5259ae){var _0x22f475=_0xa5a48a;_0x21d000[_0x22f475(0x148)](_0x5259ae);}}),_0x21d000[_0xa5a48a(0x158)]();}return _0x15627d[_0x122908(0x158)]();}