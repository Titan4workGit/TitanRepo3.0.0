var a0_0x452a54=a0_0x3752;(function(_0x7fa15f,_0x5a9864){var _0x152435=a0_0x3752,_0x2252be=_0x7fa15f();while(!![]){try{var _0x297eec=parseInt(_0x152435(0xfe))/0x1+-parseInt(_0x152435(0xea))/0x2+-parseInt(_0x152435(0xdc))/0x3+-parseInt(_0x152435(0xeb))/0x4*(parseInt(_0x152435(0xd7))/0x5)+parseInt(_0x152435(0xf8))/0x6*(parseInt(_0x152435(0xe5))/0x7)+parseInt(_0x152435(0xf6))/0x8*(-parseInt(_0x152435(0xe7))/0x9)+-parseInt(_0x152435(0xdb))/0xa*(-parseInt(_0x152435(0xe2))/0xb);if(_0x297eec===_0x5a9864)break;else _0x2252be['push'](_0x2252be['shift']());}catch(_0x179d47){_0x2252be['push'](_0x2252be['shift']());}}}(a0_0x2aa4,0x55a7c));function uploadLargeFileToSharePoint(_0x245430,_0x1c5f42,_0x479994,_0x471e8b,_0x4d179f,_0x462193,_0x45e044,_0x4599bc){var _0x52d833=a0_0x3752,_0x5daf18=_0x4d179f[_0x52d833(0xff)],_0x520395=0xa00000,_0x542b17=Math['ceil'](_0x5daf18/_0x520395),_0x399404=_0x245430+_0x52d833(0xd1)+_0x1c5f42+_0x52d833(0xd9)+_0x471e8b+_0x52d833(0xe6);_0x479994&&(_0x399404=_0x245430+'/_api/web/lists/getByTitle(\x27'+_0x1c5f42+_0x52d833(0xfb)+_0x479994+'\x27)/files/add(url=\x27'+_0x471e8b+'\x27,\x20overwrite=true)');var _0x4c1dd3=0x0,_0x347138=0x0,_0x1af498=null,_0x4c8d36=function(){var _0x5636a2=_0x52d833,_0x5aa8f2=_0x4d179f[_0x5636a2(0xec)](_0x4c1dd3,_0x4c1dd3+_0x520395),_0x460f4b=new Blob([_0x5aa8f2]);return _0x4c1dd3+=_0x520395,_0x460f4b;},_0x9394b4=function(){var _0x2376f1=_0x52d833,_0x33904c=_0x4c8d36(),_0x395ff8=_0x399404+_0x2376f1(0xd3)+_0x1af498+'&fileOffset='+_0x347138*_0x520395,_0x3d00f3=new XMLHttpRequest();_0x3d00f3['open'](_0x2376f1(0xf5),_0x395ff8),_0x3d00f3[_0x2376f1(0xd8)](_0x2376f1(0xd4),'Bearer\x20'+_spPageContextInfo[_0x2376f1(0xed)]),_0x3d00f3['setRequestHeader'](_0x2376f1(0xe8),_0x2376f1(0xfd)),_0x3d00f3[_0x2376f1(0xe1)]=function(){var _0x52208a=_0x2376f1;_0x3d00f3[_0x52208a(0xd5)]===0x4&&(_0x3d00f3[_0x52208a(0xf9)]===0xc8||_0x3d00f3[_0x52208a(0xf9)]===0xc9?(_0x347138++,_0x347138<_0x542b17?(_0x4599bc(_0x347138/_0x542b17*0x64),_0x9394b4()):_0x462193()):_0x45e044(_0x3d00f3[_0x52208a(0x101)]));},_0x3d00f3['send'](_0x33904c);},_0x22174c=function(){var _0x942158=_0x52d833,_0x39abcd=new XMLHttpRequest();_0x39abcd['open'](_0x942158(0xf5),_0x399404+_0x942158(0xf2)),_0x39abcd[_0x942158(0xd8)](_0x942158(0xd4),_0x942158(0xde)+_spPageContextInfo['accessToken']),_0x39abcd['setRequestHeader'](_0x942158(0xe8),_0x942158(0xfc)),_0x39abcd[_0x942158(0xe1)]=function(){var _0x15516e=_0x942158;if(_0x39abcd[_0x15516e(0xd5)]===0x4){if(_0x39abcd['status']===0xc8||_0x39abcd['status']===0xc9){var _0x44b621=JSON[_0x15516e(0xe0)](_0x39abcd[_0x15516e(0x101)]);_0x1af498=_0x44b621['d']['UploadId'],_0x4599bc(0x0),_0x9394b4();}else _0x45e044(_0x39abcd[_0x15516e(0x101)]);}},_0x39abcd[_0x942158(0xef)]();};_0x22174c();}function getToken(){var _0x2a8f09=a0_0x3752,_0x119243=null,_0x4574a0=new XMLHttpRequest();return _0x4574a0[_0x2a8f09(0xfa)](_0x2a8f09(0xd6),_spPageContextInfo[_0x2a8f09(0x100)]+'/_api/contextinfo',![]),_0x4574a0['setRequestHeader'](_0x2a8f09(0xee),_0x2a8f09(0xe9)),_0x4574a0[_0x2a8f09(0xe1)]=function(){var _0x35bf99=_0x2a8f09;if(_0x4574a0[_0x35bf99(0xd5)]===0x4&&_0x4574a0[_0x35bf99(0xf9)]===0xc8){var _0x14bcc8=JSON[_0x35bf99(0xe0)](_0x4574a0[_0x35bf99(0x101)]);_0x119243=_0x14bcc8['d'][_0x35bf99(0xdf)][_0x35bf99(0xf1)];}},_0x4574a0[_0x2a8f09(0xef)](),_0x119243;}var siteUrl=_spPageContextInfo[a0_0x452a54(0x100)],libraryName='DemoLibrary',folderName='',fileName='large-file.pdf',fileContent='';function a0_0x3752(_0x3f1e54,_0x29c1d8){var _0x2aa441=a0_0x2aa4();return a0_0x3752=function(_0x37526d,_0x298aba){_0x37526d=_0x37526d-0xd1;var _0x3579af=_0x2aa441[_0x37526d];return _0x3579af;},a0_0x3752(_0x3f1e54,_0x29c1d8);}function a0_0x2aa4(){var _0x286b1b=['369ihEqub','Content-Type','application/json;odata=verbose','592942JHlQZa','31708JwDAeU','slice','accessToken','Accept','send','onload','FormDigestValue','&overwrite=true','onerror','log','POST','96904xSPEms','getElementById','1638tZosDe','status','open','\x27)/RootFolder/Folders(\x27','application/json','application/octet-stream','316829ztYaFy','length','webAbsoluteUrl','responseText','/_api/web/lists/getByTitle(\x27','An\x20error\x20occurred\x20while\x20uploading\x20the\x20file:\x20','&uploadId=','Authorization','readyState','GET','140TmcwYw','setRequestHeader','\x27)/RootFolder/files/add(url=\x27','files','12104740nzxGdt','548079PSMaEl','name','Bearer\x20','GetContextWebInformation','parse','onreadystatechange','11LLooAS','result','error','546mdbElt','\x27,\x20overwrite=true)'];a0_0x2aa4=function(){return _0x286b1b;};return a0_0x2aa4();}function uploadFileew(){var _0x2a4f43=a0_0x452a54,_0x329cc4=function(){var _0x3e3055=a0_0x3752;console[_0x3e3055(0xf4)]('File\x20uploaded\x20successfully.');},_0xb24463=function(_0x44e808){var _0xf9dec1=a0_0x3752;console['log'](_0xf9dec1(0xd2)+_0x44e808);},_0x400216=function(_0x41bb83){var _0x145b48=a0_0x3752;console[_0x145b48(0xf4)]('File\x20upload\x20progress:\x20'+_0x41bb83+'%');},_0x2842df=document[_0x2a4f43(0xf7)]('fileInput'),_0x156f79=_0x2842df[_0x2a4f43(0xda)][0x0];fileName=_0x156f79[_0x2a4f43(0xdd)];var _0x21914b=new FileReader();_0x21914b[_0x2a4f43(0xf0)]=function(){var _0xefa619=_0x2a4f43;uploadLargeFileToSharePoint(siteUrl,libraryName,folderName,fileName,_0x21914b[_0xefa619(0xe3)],_0x329cc4,_0xb24463,_0x400216);},_0x21914b[_0x2a4f43(0xf3)]=function(_0x5f06ff){var _0x1ea4d0=_0x2a4f43;console[_0x1ea4d0(0xe4)]('An\x20error\x20occurred\x20while\x20loading\x20the\x20file:',_0x5f06ff['target'][_0x1ea4d0(0xe4)]);},_0x21914b['readAsBinaryString'](_0x156f79);}