var a0_0x1fbd8e=a0_0x4d4d;(function(_0x4ef43d,_0x55f6ab){var _0x17effe=a0_0x4d4d,_0x11d985=_0x4ef43d();while(!![]){try{var _0x28b2b7=parseInt(_0x17effe(0x23a))/0x1*(parseInt(_0x17effe(0x1da))/0x2)+-parseInt(_0x17effe(0x1e6))/0x3+-parseInt(_0x17effe(0x1d7))/0x4*(-parseInt(_0x17effe(0x1b9))/0x5)+parseInt(_0x17effe(0x20d))/0x6+-parseInt(_0x17effe(0x1b7))/0x7+parseInt(_0x17effe(0x1d6))/0x8*(parseInt(_0x17effe(0x1e3))/0x9)+-parseInt(_0x17effe(0x1d1))/0xa;if(_0x28b2b7===_0x55f6ab)break;else _0x11d985['push'](_0x11d985['shift']());}catch(_0xe48a48){_0x11d985['push'](_0x11d985['shift']());}}}(a0_0x26a9,0x6e430),$(document)[a0_0x1fbd8e(0x1b3)](function(){var _0x5cb501=a0_0x1fbd8e;$(_0x5cb501(0x1d3))[_0x5cb501(0x22c)](function(){var _0x525724=_0x5cb501,_0x58e73c=$('#txtGrpName')[_0x525724(0x1d5)]();let _0x274412=grpDuplicate['filter'](_0x21bf75=>{var _0x133a6c=_0x525724;if(_0x21bf75['Title']!=null)return _0x21bf75[_0x133a6c(0x227)]['toLowerCase']()===_0x58e73c['toLowerCase']();});if(_0x274412[_0x525724(0x1c8)]>0x0)return alert(_0x525724(0x1dd)),![];if($['trim']($(_0x525724(0x21a))['val']())!='')addGroup(_0x525724(0x246)),GetGroupUsersGroups(_0x525724(0x246),0x1);else return alert(_0x525724(0x237)),![];});}));function addGroup(_0x492460){var _0x46c58f=a0_0x1fbd8e;if($[_0x46c58f(0x222)]($('#txtGrpName')[_0x46c58f(0x1d5)]())!=''){var _0xd20d6,_0x1b9ea8=GetItemTypeForListNameDetails(_0x46c58f(0x1e1));_0xd20d6={'__metadata':{'type':_0x1b9ea8},'Title':$('#txtGrpName')[_0x46c58f(0x1d5)]()},_0x492460==_0x46c58f(0x246)?(AddItemToListGroups(_0x46c58f(0x1e1),_0xd20d6),alert(_0x46c58f(0x1e8)),$(_0x46c58f(0x21a))[_0x46c58f(0x1d5)]('')):updateUserWithIDGroup(_0x46c58f(0x1e1),_0xd20d6,itemIdToUpdate,[],'');}}function GetItemTypeForListNameDetails(_0x13eacd){var _0x3604c1=a0_0x1fbd8e;return'SP.Data.'+_0x13eacd['charAt'](0x0)['toUpperCase']()+_0x13eacd[_0x3604c1(0x236)]('\x20')[_0x3604c1(0x1ab)]('')[_0x3604c1(0x1af)](0x1)+_0x3604c1(0x1e0);}function AddItemToListGroups(_0x5bd6f3,_0x43c506){var _0x13e27e=a0_0x1fbd8e,_0x1da56f=$[_0x13e27e(0x1c0)]();return $[_0x13e27e(0x1b8)]({'url':_spPageContextInfo[_0x13e27e(0x218)]+_0x13e27e(0x1ee)+_0x5bd6f3+'\x27)/items','type':_0x13e27e(0x244),'async':![],'headers':{'accept':'application/json;odata=verbose','X-RequestDigest':$(_0x13e27e(0x229))['val'](),'content-Type':_0x13e27e(0x1fc)},'data':JSON['stringify'](_0x43c506),'success':function(_0x3b0fc5){_0x1da56f['resolve'](_0x3b0fc5);},'error':function(_0x1bd30b){alert(JSON['stringify'](_0x1bd30b)),_0x1da56f['reject'](_0x1bd30b);}}),_0x1da56f[_0x13e27e(0x21d)]();}function updateUserWithIDGroup(_0x283212,_0xe81d0,_0x43caa2,_0x52e29a,_0x179b1c){var _0x1edac9=a0_0x1fbd8e,_0x2c41dc=$[_0x1edac9(0x1c0)](),_0x463e01=_spPageContextInfo[_0x1edac9(0x218)]+_0x1edac9(0x207)+_0x283212+_0x1edac9(0x1eb)+_0x43caa2+')';return $['ajax']({'url':_0x463e01,'type':_0x1edac9(0x244),'async':![],'headers':{'accept':'application/json;odata=verbose','X-RequestDigest':$(_0x1edac9(0x229))[_0x1edac9(0x1d5)](),'content-Type':_0x1edac9(0x1fc),'X-Http-Method':'PATCH','If-Match':'*'},'data':JSON['stringify'](_0xe81d0),'success':function(_0x352243){var _0x2adb81=_0x1edac9;_0x2c41dc['resolve'](!![]),_0x52e29a[_0x2adb81(0x1c8)]>0x0&&(_0x52e29a[_0x2adb81(0x1c8)]>0x1?alert(_0x52e29a['join'](',\x20')+'\x20users\x20are\x20not\x20valid!'):alert(_0x52e29a[_0x2adb81(0x1ab)](',\x20')+_0x2adb81(0x204))),updateSpecificGroup(_0x179b1c);},'error':function(_0xb67112){var _0x4e139c=_0x1edac9;alert(JSON[_0x4e139c(0x240)](_0xb67112)),_0x2c41dc[_0x4e139c(0x1ad)](_0xb67112);}}),_0x2c41dc[_0x1edac9(0x21d)]();}function getSelectedUsers(_0x2092e4){var _0x37549a=a0_0x1fbd8e,_0x40c39d=$(_0x37549a(0x1f2)+_0x2092e4)[_0x37549a(0x238)](),_0x255beb=[],_0x514496=_spPageContextInfo['webAbsoluteUrl']+_0x37549a(0x1df)+_0x40c39d+'\x27';$['ajax']({'url':_0x514496,'method':_0x37549a(0x1ba),'headers':{'Accept':'application/json;\x20odata=verbose'},'async':![],'success':function(_0x7e4627){var _0x2ae790=_0x37549a,_0xfbf5df=_0x7e4627;if(_0xfbf5df['d'][_0x2ae790(0x205)][0x0][_0x2ae790(0x219)][_0x2ae790(0x205)]!=null)for(var _0x328442=0x0;_0x328442<_0xfbf5df['d'][_0x2ae790(0x205)][0x0][_0x2ae790(0x219)]['results'][_0x2ae790(0x1c8)];_0x328442++){_0x255beb[_0x2ae790(0x228)](_0xfbf5df['d']['results'][0x0][_0x2ae790(0x219)][_0x2ae790(0x205)][_0x328442]['ID']);}var _0x262ac9=_0x2ae790(0x20f),_0x5a38e6=_0x2ae790(0x24b),_0x4334b2=0xc8,_0x52d914=0x190;SP[_0x2ae790(0x234)]['loadMultiple']([_0x2ae790(0x22b),_0x2ae790(0x1f8)],function(){var _0x8e8181=_0x2ae790;currentDlg=SP['UI'][_0x8e8181(0x1f6)]['showWaitScreenWithNoClose'](_0x262ac9,_0x5a38e6,_0x4334b2,_0x52d914);}),setTimeout(function(){UpdateGpMember(_0x2092e4,_0x255beb,_0x2092e4);},0x64);},'error':function(_0x53dc51){var _0x513049=_0x37549a;console['log'](JSON[_0x513049(0x240)](_0x53dc51));}});}var arrUsers=[],grpDuplicate=[];function a0_0x4d4d(_0xf715d4,_0x2a7de7){var _0x26a979=a0_0x26a9();return a0_0x4d4d=function(_0x4d4d91,_0x200a42){_0x4d4d91=_0x4d4d91-0x1ab;var _0x2ca10b=_0x26a979[_0x4d4d91];return _0x2ca10b;},a0_0x4d4d(_0xf715d4,_0x2a7de7);}function GetGroupUsersGroups(_0x467eae,_0x4e0c32){var _0x392c4b=a0_0x1fbd8e,_0x3f0224='';arrUsers=[],$(_0x392c4b(0x202))[_0x392c4b(0x231)]('');var _0x468fab=_spPageContextInfo[_0x392c4b(0x218)]+_0x392c4b(0x1e5);$[_0x392c4b(0x1b8)]({'url':_0x468fab,'method':'GET','headers':{'Accept':'application/json;\x20odata=verbose'},'async':![],'success':function(_0xb94d9d){var _0x1b66cf=_0x392c4b,_0x223821=_0xb94d9d;grpDuplicate=_0x223821['d']['results'],$('#thbodyControl')[_0x1b66cf(0x231)](''),$('#myTable\x20tbody\x20tr')[_0x1b66cf(0x231)]('');for(var _0x13090b=0x0;_0x13090b<_0x223821['d'][_0x1b66cf(0x205)][_0x1b66cf(0x1c8)];_0x13090b++){if(_0x13090b!=0x0){}arrUsers[_0x1b66cf(0x228)]({'ID':_0x13090b,'Users':_0x223821['d'][_0x1b66cf(0x205)][_0x13090b][_0x1b66cf(0x219)][_0x1b66cf(0x205)]}),console[_0x1b66cf(0x235)](arrUsers);var _0x247996=_0x223821['d'][_0x1b66cf(0x205)][_0x13090b][_0x1b66cf(0x227)],_0x98545e=_0x223821['d']['results'][_0x13090b]['ID'],_0x55d01f='';_0x55d01f+=_0x1b66cf(0x23c),_0x55d01f+=_0x1b66cf(0x1e4)+_0x13090b+_0x1b66cf(0x1ed)+_0x13090b+_0x1b66cf(0x241)+_0x13090b+_0x1b66cf(0x208),_0x55d01f+=_0x1b66cf(0x1b0)+_0x13090b+'\x22>'+_0x98545e+_0x1b66cf(0x230)+_0x247996+_0x1b66cf(0x247)+_0x98545e+_0x1b66cf(0x206)+_0x247996+'\x27);\x22><i\x20class=\x22fa\x20fa-trash-o\x22></i></button></div><i\x20class=\x22fa\x20fa-chevron-down\x22></i></a></h4></div>',_0x55d01f+=_0x1b66cf(0x24c)+_0x13090b+_0x1b66cf(0x1be)+_0x13090b+'\x22>',_0x55d01f+=_0x1b66cf(0x1f4),_0x55d01f+=_0x1b66cf(0x1ca)+_0x13090b+'\x22\x20type=\x22button\x22\x20onclick=\x22toggleClass(this\x20,'+_0x13090b+_0x1b66cf(0x239)+_0x13090b+_0x1b66cf(0x212)+_0x13090b+_0x1b66cf(0x20e)+_0x13090b+'\x22></span>\x20\x20</div>',_0x55d01f+=_0x1b66cf(0x1db),$(_0x1b66cf(0x202))[_0x1b66cf(0x1f1)](_0x55d01f);var _0x36d8d8=_0x1b66cf(0x1c4)+_0x13090b,_0x1c1173=_0x36d8d8+_0x1b66cf(0x1fa);SetPeoplePicker_MultiselectGroups1(_0x36d8d8,!![]),$('#'+_0x1c1173)[_0x1b66cf(0x20b)](_0x1b66cf(0x1f3));}currentDlg!=''&&currentDlg[_0x1b66cf(0x1e2)]();if(_0x467eae=='Add'){var _0x1c5fbf=_0x223821['d'][_0x1b66cf(0x205)]['length']-0x1;$(_0x1b66cf(0x1b6)+_0x1c5fbf)[_0x1b66cf(0x213)](_0x1b66cf(0x22e),_0x1b66cf(0x1c1)),$('#GroupId'+_0x1c5fbf)[_0x1b66cf(0x20a)](_0x1b66cf(0x1bf)),$(_0x1b66cf(0x200)+_0x1c5fbf)[_0x1b66cf(0x20a)]('panel-collapse\x20collapse'),$(_0x1b66cf(0x200)+_0x1c5fbf)[_0x1b66cf(0x20b)](_0x1b66cf(0x1c7)),$(_0x1b66cf(0x200)+_0x1c5fbf)[_0x1b66cf(0x213)](_0x1b66cf(0x22e),_0x1b66cf(0x1c1));}else $(_0x1b66cf(0x1b6)+_0x4e0c32)[_0x1b66cf(0x213)]('aria-expanded','true'),$(_0x1b66cf(0x1b6)+_0x4e0c32)['removeClass'](_0x1b66cf(0x1bf)),$('#group'+_0x4e0c32)[_0x1b66cf(0x20a)]('panel-collapse\x20collapse'),$(_0x1b66cf(0x200)+_0x4e0c32)[_0x1b66cf(0x20b)](_0x1b66cf(0x1c7)),$(_0x1b66cf(0x200)+_0x4e0c32)[_0x1b66cf(0x213)](_0x1b66cf(0x22e),'true');},'error':function(_0x46565a){var _0x401b8d=_0x392c4b;console[_0x401b8d(0x235)](JSON['stringify'](_0x46565a));}});}function DeleteGroup(_0x89eb80,_0x41bb0f){var _0x17cb2d=a0_0x1fbd8e;if(confirm('Do\x20you\x20want\x20to\x20delete\x20the\x20\x27'+_0x41bb0f+_0x17cb2d(0x1d0))){var _0x3eafee=$['Deferred']();return $[_0x17cb2d(0x1b8)]({'url':_spPageContextInfo[_0x17cb2d(0x218)]+_0x17cb2d(0x224)+_0x89eb80+')','type':'POST','headers':{'accept':_0x17cb2d(0x1fc),'X-RequestDigest':$(_0x17cb2d(0x229))['val'](),'IF-MATCH':'*','X-HTTP-Method':_0x17cb2d(0x1bb)},'success':function(_0x4ef798){var _0x4c2a4a=_0x17cb2d;_0x3eafee[_0x4c2a4a(0x21c)](_0x4ef798);var _0x1909c7=_0x4c2a4a(0x1fb),_0x161eef=_0x4c2a4a(0x24b),_0x29776a=0xc8,_0x27a41a=0x190;SP['SOD'][_0x4c2a4a(0x20c)](['strings.js',_0x4c2a4a(0x1f8)],function(){var _0x3404e6=_0x4c2a4a;currentDlg=SP['UI'][_0x3404e6(0x1f6)]['showWaitScreenWithNoClose'](_0x1909c7,_0x161eef,_0x29776a,_0x27a41a);}),setTimeout(function(){GetGroupUsersGroups('','');},0x64);},'error':function(_0x3e4a41){var _0x5db296=_0x17cb2d;_0x3eafee[_0x5db296(0x1ad)](_0x3e4a41);}}),_0x3eafee[_0x17cb2d(0x21d)]();}}function DeleteUserFromGrp(_0x364b99,_0x216a2c){var _0x1b9631=a0_0x1fbd8e;if(confirm(_0x1b9631(0x1ea))){var _0x5d7019=$('.itemIDClass'+_0x216a2c)['text'](),_0x4646fb=[],_0x1634c5=_spPageContextInfo[_0x1b9631(0x218)]+_0x1b9631(0x1df)+_0x5d7019+'\x27';$[_0x1b9631(0x1b8)]({'url':_0x1634c5,'method':'GET','headers':{'Accept':'application/json;\x20odata=verbose'},'async':![],'success':function(_0x3e8f29){var _0x2a7177=_0x1b9631,_0x3d2383=_0x3e8f29;if(_0x3d2383['d'][_0x2a7177(0x205)][0x0][_0x2a7177(0x219)]['results']!=null)for(var _0x389d48=0x0;_0x389d48<_0x3d2383['d'][_0x2a7177(0x205)][0x0][_0x2a7177(0x219)][_0x2a7177(0x205)]['length'];_0x389d48++){_0x4646fb[_0x2a7177(0x228)](_0x3d2383['d'][_0x2a7177(0x205)][0x0]['Approvers']['results'][_0x389d48]['ID']);}_0x4646fb[_0x2a7177(0x1c3)](_0x364b99);var _0x1f70fc=_0x2a7177(0x20f),_0xb77be1=_0x2a7177(0x24b),_0x3d32c4=0xc8,_0x563f59=0x190;SP['SOD'][_0x2a7177(0x20c)]([_0x2a7177(0x22b),_0x2a7177(0x1f8)],function(){var _0x362e78=_0x2a7177;currentDlg=SP['UI'][_0x362e78(0x1f6)]['showWaitScreenWithNoClose'](_0x1f70fc,_0xb77be1,_0x3d32c4,_0x563f59);}),setTimeout(function(){UpdateGpMember(_0x216a2c,_0x4646fb,_0x216a2c);},0x64);},'error':function(_0x153b1c){var _0x26f75c=_0x1b9631;console[_0x26f75c(0x235)](JSON[_0x26f75c(0x240)](_0x153b1c));}});}}function UpdateGpMember(_0x382713,_0x12a5a1,_0x382713){var _0x2819bd=a0_0x1fbd8e,_0x2e8795=$('.itemIDClass'+_0x382713)[_0x2819bd(0x238)](),_0x3f1914=[],_0x2b5bcb=[],_0xbadb41=[];_0x3f1914=getPeopleUserMyGroup('newPeoplePickerControl'+_0x382713);if(_0x3f1914[_0x2819bd(0x1c8)]==0x0)_0x3f1914[_0x2819bd(0x228)](0x0);else for(var _0x4db13b=0x0;_0x4db13b<_0x3f1914[_0x2819bd(0x1c8)];_0x4db13b++){var _0x47332e=_spPageContextInfo[_0x2819bd(0x218)]+_0x2819bd(0x1c2)+_0x3f1914[_0x4db13b]+'\x27';$[_0x2819bd(0x1b8)]({'url':_0x47332e,'type':_0x2819bd(0x1ba),'async':![],'headers':{'ACCEPT':_0x2819bd(0x1fc)},'success':function(_0x1fd8a6){var _0x53cea8=_0x2819bd,_0x2c364d=_0x1fd8a6['d'][_0x53cea8(0x205)];if(_0x2c364d[_0x53cea8(0x1c8)]>0x0){if(_0x2c364d[0x0][_0x53cea8(0x245)]=='Active'&&_0x2c364d[0x0][_0x53cea8(0x220)]==_0x53cea8(0x1cd)){}else{var _0x248920=_0x53cea8(0x1bd)+_0x3f1914[_0x4db13b]+_0x53cea8(0x1ef);url=_spPageContextInfo[_0x53cea8(0x218)]+'/_api/web/lists/getbytitle(\x27ExternalUsers\x27)/items/'+_0x248920,$[_0x53cea8(0x1b8)]({'url':url,'type':'GET','async':![],'headers':{'ACCEPT':'application/json;odata=verbose'},'success':function(_0x12d2ba){var _0x59a61=_0x53cea8,_0x45ac56=_0x12d2ba['d'][_0x59a61(0x205)];if(_0x45ac56[_0x59a61(0x1c8)]>0x0){}else{_0xbadb41['push'](_0x3f1914[_0x4db13b]);var _0x47ef68=_0x2c364d[0x0][_0x59a61(0x1cf)]['FirstName']+'\x20'+_0x2c364d[0x0][_0x59a61(0x1cf)][_0x59a61(0x1f0)];_0x2b5bcb[_0x59a61(0x228)](_0x47ef68);}},'error':function(){alert('Error\x20getting\x20the\x20Employee\x20status.');}});}}else{var _0x248920=_0x53cea8(0x1bd)+_0x3f1914[_0x4db13b]+_0x53cea8(0x1ef);url=_spPageContextInfo['webAbsoluteUrl']+_0x53cea8(0x1f9)+_0x248920,$[_0x53cea8(0x1b8)]({'url':url,'type':_0x53cea8(0x1ba),'async':![],'headers':{'ACCEPT':_0x53cea8(0x1fc)},'success':function(_0x563b93){var _0x155d53=_0x53cea8,_0x36f1de=_0x563b93['d'][_0x155d53(0x205)];if(_0x36f1de['length']>0x0){}else _0xbadb41['push'](_0x3f1914[_0x4db13b]),_0x2b5bcb['push'](SharedUserName[_0x4db13b]);},'error':function(){alert('Error\x20getting\x20the\x20Employee\x20status.');}});}$(_0x53cea8(0x223))[_0x53cea8(0x20a)]('activingss');},'error':function(){alert('Error\x20getting\x20the\x20Employee\x20status.');}});}_0x3f1914=_0x3f1914[_0x2819bd(0x251)](function(_0x3314d3){return _0xbadb41['indexOf'](_0x3314d3)<0x0;}),_0x12a5a1=_0x12a5a1[_0x2819bd(0x215)](_0x3f1914),_0x12a5a1=_0x12a5a1[_0x2819bd(0x251)](function(_0x468d42,_0x442a19){var _0x38134e=_0x2819bd;return _0x12a5a1[_0x38134e(0x249)](_0x468d42)==_0x442a19;});var _0x3a3297,_0xe13fd6=GetItemTypeForListNameDetails(_0x2819bd(0x1e1));_0x3a3297={'__metadata':{'type':_0xe13fd6},'ApproversId':{'results':_0x12a5a1}},updateUserWithIDGroup(_0x2819bd(0x1e1),_0x3a3297,_0x2e8795,_0x2b5bcb,_0x382713);var _0x555daf=_0x2819bd(0x1c4)+_0x382713;resetPeoplePicker(_0x555daf);}function a0_0x26a9(){var _0x3d525c=['click','apply','aria-expanded','</a></p></div>','</label><span\x20class=\x22groupName0\x22\x20style=\x22color:\x20black;\x22>','html','?$select=Id,Title,PrimaryCompany,AttachmentFiles,Status,FullName,Designation,LogonName/EMail,LogonName/FirstName,LogonName/LastName,Company/Id,Company/Title,Department/Title,Designation&$expand=LogonName,AttachmentFiles,Company,Department&$top=5000&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20PrimaryCompany\x20eq\x20\x27Primary\x27\x20and\x20LogonName/EMail\x20eq\x20\x27','</span></p>','SOD','log','split','Kindly\x20enter\x20group\x20name.','text',');\x22>\x20<i\x20class=\x22fa\x20fa-plus\x20tottglinbtn','10thnjUp','_TopSpan','<div\x20class=\x22panel\x20panel-default\x20addGrpUser\x22><div\x20class=\x22panel-heading\x20custom-panel-heading\x22><h4\x20class=\x22panel-title\x22>','FullName','<div\x20class=\x22groups-card-body\x22><div\x20class=\x22groups-card-body-info\x20text-ellipsis\x22><h3\x20class=\x22member-name\x20text-ellipsis\x22>','<p\x20class=\x22member-email\x20text-ellipsis\x22><a\x20href=\x22mailto:','stringify',')\x22\x20data-toggle=\x22collapse\x22\x20data-parent=\x22#accordGroup\x22\x20href=\x22#group','#thbodyControl','EntityData','POST','Status','Add','</span><div\x20class=\x22remove-group-btn-box\x22><button\x20type=\x22button\x22\x20class=\x22remove_groupsec\x22\x20onclick=\x22DeleteGroup(','OnValueChangedClientScript','indexOf','321px','<br\x20/>Please\x20wait!!','<div\x20id=\x22group',')/users','SPGroupID','User','LoginName','filter','join','AllowMultipleValues','reject','siteAbsoluteUrl','slice','<label\x20style=\x22display:none;\x22\x20class=\x22itemIDClass','toggleClass','</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>','ready','/_api/web/siteusers(@v)?@v=\x27','User,SPGroup','#GroupId','3279731nICUeh','ajax','80XoiYRR','GET','DELETE','Users','?$select=Status,LoginName/Id&$expand=LoginName&$filter=LoginName/Id\x20eq\x20\x27','\x22\x20class=\x22panel-collapse\x20collapse\x22\x20aria-expanded=\x22false\x22><div\x20class=\x22panel-body\x22><div\x20class=\x22row\x20group-inner-scroll\x20scrollbar-panel\x22\x20id=\x22idForUpdate','collapsed','Deferred','true','/_api/lists/getbytitle(\x27Employees\x27)/items?$select=LogonName/ID,LogonName/FirstName,LogonName/LastName,Department/DepartmentName,*&$Expand=LogonName,AttachmentFiles,Department&$Filter=LogonName/ID\x20eq\x20\x27','remove','newPeoplePickerControl','email','\x20alt=\x22user\x22></div>','panel-collapse\x20collapse\x20in','length','MaximumEntitySuggestions','<div\x20class=\x22addeventcircle\x22>\x20<button\x20class=\x22btn\x20custom-btn\x20tottglinbtn',');\x22><button\x20type=\x22button\x22\x20class=\x22btn\x20remove-group-btn\x20remove-btn\x20close\x20close-round\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i></button></div>','Designation','Primary','Failed','LogonName','\x27\x20group?','872120IVjDLj','System\x20Account','#btnAddNewGroup','DisplayText','val','9664JtMjer','70008oLotxd','#myTable\x20tbody\x20tr','GetAllUserInfo','95486DdRihD','</div></div></div>','Key','Duplicate\x20group\x20name!','grep','/_api/web/lists/getbytitle(\x27ApproversGroups\x27)/items?$select=ID,Approvers/ID,Approvers/Title,Approvers/EMail,Title&$expand=Approvers&$orderby=ID\x20asc&$filter=ID\x20eq\x20\x27','ListItem','ApproversGroups','close','180FMVjWS','<a\x20class=\x22panel-title-box\x20collapsed\x22\x20id=\x22GroupId','/_api/web/lists/getbytitle(\x27ApproversGroups\x27)/items?$select=ID,Approvers/ID,Approvers/Title,Approvers/EMail,Title&$expand=Approvers&$orderby=ID\x20asc','1299132hZvxOx','/_layouts/15/userphoto.aspx?accountname=','New\x20group\x20is\x20created','SPClientPeoplePickerDict','Do\x20you\x20want\x20to\x20delete\x20this\x20user?','\x27)/Items(','EMail','\x22\x20onclick=\x22hidePeoplePickers(','/_api/web/lists/getbytitle(\x27','\x27\x20and\x20Status\x20eq\x20\x27Active\x27&$top=5000','LastName','append','.itemIDClass','suggestion_span','</div><div\x20class=\x22row\x20overflow_sec\x22><div\x20class=\x22col-xs-12\x22><div\x20class=\x22add-menber-dropdown\x22>','</h3>','ModalDialog','ExternalUsers','sp.ui.dialog.js','/_api/web/lists/getbytitle(\x27ExternalUsers\x27)/items/','_TopSpan_NotificationSpan','Deleting\x20group...','application/json;odata=verbose','\x20</h3>','ServerRelativeUrl','?$select=AttachmentFiles,LoginName/EMail,email,LoginName/Title,LoginName/Id,Designation,Client_Name/Title&$expand=AttachmentFiles,LoginName,Client_Name&$filter=email\x20eq\x20\x27','#group','when','#accordGroup','done','\x20user\x20is\x20not\x20valid!','results',',\x20\x27','/_api/Web/Lists/getByTitle(\x27','\x22\x20aria-expanded=\x22false\x22>','<p\x20class=\x22member-deg\x20text-ellipsis\x22><span>','removeClass','addClass','loadMultiple','3952794PhWBKA','\x22\x20class=\x22form-control\x20increase_effect\x20increase_effect','Updating\x20groups...','<div\x20class=\x22col-md-4\x20col-sm-6\x20col-xs-12\x22><div\x20class=\x22groups-card\x22><div\x20class=\x22groups-card-head\x22><img\x20src=','i:0#.f|membership|','\x22\x20></i>\x20</button><span\x20id=\x22newPeoplePickerControl','attr','\x27&$top=5000','concat','<div\x20class=\x22text-right\x22\x20onclick=\x22DeleteUserFromGrp(','AttachmentFiles','webAbsoluteUrl','Approvers','#txtGrpName','activingss','resolve','promise','application/json;\x20odata=verbose','Employees','PrimaryCompany','Width','trim','.increase_effect','/_api/web/lists/GetByTitle(\x27ApproversGroups\x27)/items(','#idForUpdate','SearchPrincipalSource','Title','push','#__REQUESTDIGEST','forEach','strings.js'];a0_0x26a9=function(){return _0x3d525c;};return a0_0x26a9();}function SetPeoplePicker_MultiselectGroups1(_0x37d8e1,_0x499166){var _0x3c16e2=a0_0x1fbd8e;_0x499166==null&&(_0x499166=![]);var _0x51c633={};_0x51c633['PrincipalAccountType']=_0x3c16e2(0x1b5),_0x51c633[_0x3c16e2(0x226)]=0xf,_0x51c633['ResolvePrincipalSource']=0xf,_0x51c633[_0x3c16e2(0x1ac)]=_0x499166,_0x51c633[_0x3c16e2(0x1c9)]=0x32,_0x51c633[_0x3c16e2(0x221)]=_0x3c16e2(0x24a),SPClientPeoplePicker_InitStandaloneControlWrapper(_0x37d8e1,null,_0x51c633);}var DynamicId='',grpIndex='',flag1=!![];function toggleClass(_0x5e17d6,_0x1ff6a5){var _0x108269=a0_0x1fbd8e;DynamicId=_0x108269(0x1c4)+_0x1ff6a5+_0x108269(0x23b),grpIndex=_0x1ff6a5,$('.tottglinbtn'+_0x1ff6a5)['toggleClass'](_0x108269(0x21b)),$(_0x108269(0x223)+_0x1ff6a5)[_0x108269(0x1b1)](_0x108269(0x21b)),onChangeSharing1();}function onChangeSharing1(){var _0x3038d0=a0_0x1fbd8e,_0x26eb9a=SPClientPeoplePicker['SPClientPeoplePickerDict'][DynamicId],_0x3a89f5='';_0x26eb9a[_0x3038d0(0x248)]=function(_0x6f9c14,_0x1d7f41){var _0x1d7602=_0x3038d0;_0x1d7f41[_0x1d7602(0x1c8)]>0x0&&getSelectedUsers(grpIndex);};}function updateSpecificGroup(_0x345b30){var _0x28f429=a0_0x1fbd8e,_0x401203=$(_0x28f429(0x1f2)+_0x345b30)['text'](),_0x22bbd5=[],_0x53aa70=_spPageContextInfo[_0x28f429(0x218)]+_0x28f429(0x1df)+_0x401203+'\x27';$[_0x28f429(0x1b8)]({'url':_0x53aa70,'method':_0x28f429(0x1ba),'headers':{'Accept':_0x28f429(0x21e)},'async':!![],'success':function(_0x58e123){var _0x3b5405=_0x28f429,_0x33e92d=_0x58e123;console[_0x3b5405(0x235)](_0x58e123),$(_0x3b5405(0x242))[_0x3b5405(0x231)](''),$(_0x3b5405(0x1d8))[_0x3b5405(0x231)]('');for(var _0x4b5d8a=0x0;_0x4b5d8a<_0x33e92d['d'][_0x3b5405(0x205)][_0x3b5405(0x1c8)];_0x4b5d8a++){if(_0x4b5d8a!=0x0){}var _0x3124e4=_0x33e92d['d']['results'][_0x4b5d8a][_0x3b5405(0x227)],_0x54ca4c=_0x33e92d['d'][_0x3b5405(0x205)][_0x4b5d8a]['ID'],_0x4c8c65='';if(_0x33e92d['d'][_0x3b5405(0x205)][_0x4b5d8a][_0x3b5405(0x219)][_0x3b5405(0x205)]!=null)for(var _0x5678af=0x0;_0x5678af<_0x33e92d['d']['results'][_0x4b5d8a][_0x3b5405(0x219)][_0x3b5405(0x205)]['length'];_0x5678af++){var _0x5cca71=_0x33e92d['d']['results'][_0x4b5d8a][_0x3b5405(0x219)]['results'][_0x5678af][_0x3b5405(0x1ec)],_0x3d2a27=_0x33e92d['d'][_0x3b5405(0x205)][_0x4b5d8a][_0x3b5405(0x219)]['results'][_0x5678af]['ID'];if(_0x5cca71!=null&&_0x5cca71!=''){var _0x5cefc6='?$select=Id,Title,PrimaryCompany,AttachmentFiles,Status,FullName,Designation,LogonName/EMail,LogonName/FirstName,LogonName/LastName,Company/Id,Company/Title,Department/Title,Designation&$expand=LogonName,AttachmentFiles,Company,Department&$top=5000&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20PrimaryCompany\x20eq\x20\x27Primary\x27\x20and\x20LogonName/EMail\x20eq\x20\x27'+_0x5cca71+'\x27\x20';$[_0x3b5405(0x201)](getItemsWithQueryItems(_0x3b5405(0x21f),_0x5cefc6))[_0x3b5405(0x203)](function(_0x3e69f7){var _0x5bcfb3=_0x3b5405;UResults=_0x3e69f7[_0x5bcfb3(0x205)];var _0x28202e=UResults[0x0];if(UResults[_0x5bcfb3(0x1c8)]>0x0)_0x28202e[_0x5bcfb3(0x217)]['results'][_0x5bcfb3(0x1c8)]>0x0?attachmentUrl=_0x28202e[_0x5bcfb3(0x217)]['results'][0x0][_0x5bcfb3(0x1fe)]:attachmentUrl=_spPageContextInfo[_0x5bcfb3(0x218)]+_0x5bcfb3(0x1e7)+escapeProperly(_0x28202e[_0x5bcfb3(0x1cf)][_0x5bcfb3(0x1ec)]),_0x4c8c65+=_0x5bcfb3(0x210)+attachmentUrl+_0x5bcfb3(0x1c6),_0x4c8c65+=_0x5bcfb3(0x23e)+_0x28202e[_0x5bcfb3(0x23d)]+_0x5bcfb3(0x1f5),_0x4c8c65+=_0x5bcfb3(0x209)+_0x28202e['Designation']+_0x5bcfb3(0x1b2)+_0x28202e['Department'][_0x5bcfb3(0x227)]+_0x5bcfb3(0x233),_0x4c8c65+=_0x5bcfb3(0x23f)+_0x5cca71+'\x22>'+_0x5cca71+_0x5bcfb3(0x22f),_0x4c8c65+=_0x5bcfb3(0x216)+_0x3d2a27+',\x20'+_0x345b30+_0x5bcfb3(0x1cb),_0x4c8c65+='</div></div></div>';else{var _0x45aa73=_0x5bcfb3(0x1ff)+_0x5cca71+_0x5bcfb3(0x214);$[_0x5bcfb3(0x201)](getItemsWithQueryItems(_0x5bcfb3(0x1f7),_0x45aa73))[_0x5bcfb3(0x203)](function(_0x99e536){var _0x513f1f=_0x5bcfb3;UResults=_0x99e536[_0x513f1f(0x205)];var _0x4a233a=UResults[0x0];UResults[_0x513f1f(0x1c8)]>0x0&&(_0x4a233a[_0x513f1f(0x217)][_0x513f1f(0x205)][_0x513f1f(0x1c8)]>0x0?attachmentUrl=_0x4a233a[_0x513f1f(0x217)][_0x513f1f(0x205)][0x0]['ServerRelativeUrl']:attachmentUrl=_spPageContextInfo[_0x513f1f(0x218)]+_0x513f1f(0x1e7)+escapeProperly(_0x4a233a[_0x513f1f(0x1c5)]),_0x4c8c65+=_0x513f1f(0x210)+attachmentUrl+'\x20alt=\x22user\x22></div>',_0x4c8c65+='<div\x20class=\x22groups-card-body\x22><div\x20class=\x22groups-card-body-info\x20text-ellipsis\x22><h3\x20class=\x22member-name\x20text-ellipsis\x22>'+_0x4a233a['LoginName'][_0x513f1f(0x227)]+'\x20</h3>',_0x4c8c65+=_0x513f1f(0x209)+_0x4a233a['Designation']+_0x513f1f(0x1b2)+_0x4a233a['Client_Name'][_0x513f1f(0x227)]+'</span></p>',_0x4c8c65+=_0x513f1f(0x23f)+_0x5cca71+'\x22>'+_0x5cca71+_0x513f1f(0x22f),_0x4c8c65+='<div\x20class=\x22text-right\x22\x20onclick=\x22DeleteUserFromGrp('+_0x3d2a27+',\x20'+_0x345b30+');\x22><button\x20type=\x22button\x22\x20class=\x22btn\x20remove-group-btn\x20remove-btn\x20close\x20close-round\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i></button></div>',_0x4c8c65+=_0x513f1f(0x1db));});}});}}_0x4c8c65+='</div>',$(_0x3b5405(0x225)+_0x345b30)[_0x3b5405(0x231)](_0x4c8c65);var _0x2958cd='newPeoplePickerControl'+_0x4b5d8a;}currentDlg!=''&&currentDlg[_0x3b5405(0x1e2)]();},'error':function(_0x398b58){var _0x341134=_0x28f429;console[_0x341134(0x235)](JSON[_0x341134(0x240)](_0x398b58));}});}function resetPeoplePicker(_0x1da4da){var _0xbc8400=a0_0x1fbd8e,_0xea15d0=this['SPClientPeoplePicker'][_0xbc8400(0x1e9)][_0x1da4da+_0xbc8400(0x23b)],_0x576624=_0xea15d0[_0xbc8400(0x1d9)]();_0x576624[_0xbc8400(0x22a)](function(_0x45af24){_0xea15d0['DeleteProcessedUser'](_0x576624[_0x45af24]);});}function hidePeoplePickers(_0x2caa87){var _0x19e265=a0_0x1fbd8e;$('.increase_effect')['removeClass'](_0x19e265(0x21b)),console[_0x19e265(0x235)]();var _0x12fd28=$(_0x19e265(0x225)+_0x2caa87)[_0x19e265(0x231)]()['length'];if(_0x12fd28>0x0)return![];var _0x5be7fd='',_0x1ae757=arrUsers[_0x19e265(0x251)](function(_0x1c6f25){return _0x1c6f25['ID']==_0x2caa87;});if(_0x1ae757[0x0]['Users']!=undefined)for(var _0x6df76e=0x0;_0x6df76e<_0x1ae757[0x0]['Users'][_0x19e265(0x1c8)];_0x6df76e++){var _0x42c664=_0x1ae757[0x0]['Users'][_0x6df76e][_0x19e265(0x1ec)],_0x249e54=_0x1ae757[0x0][_0x19e265(0x1bc)][_0x6df76e]['ID'];if(_0x42c664!=null&&_0x42c664!=''){var _0x15c85a=_0x19e265(0x232)+_0x42c664+'\x27\x20';$[_0x19e265(0x201)](getItemsWithQueryItems(_0x19e265(0x21f),_0x15c85a))[_0x19e265(0x203)](function(_0x5cd991){var _0x36c910=_0x19e265;UResults=_0x5cd991['results'];var _0x59d7aa=UResults[0x0];if(UResults['length']>0x0)_0x59d7aa[_0x36c910(0x217)][_0x36c910(0x205)][_0x36c910(0x1c8)]>0x0?attachmentUrl=_0x59d7aa['AttachmentFiles'][_0x36c910(0x205)][0x0][_0x36c910(0x1fe)]:attachmentUrl=_spPageContextInfo[_0x36c910(0x218)]+_0x36c910(0x1e7)+escapeProperly(_0x59d7aa['LogonName'][_0x36c910(0x1ec)]),_0x5be7fd+=_0x36c910(0x210)+attachmentUrl+'\x20alt=\x22user\x22></div>',_0x5be7fd+=_0x36c910(0x23e)+_0x59d7aa[_0x36c910(0x23d)]+_0x36c910(0x1f5),_0x5be7fd+=_0x36c910(0x209)+_0x59d7aa[_0x36c910(0x1cc)]+_0x36c910(0x1b2)+_0x59d7aa['Department'][_0x36c910(0x227)]+_0x36c910(0x233),_0x5be7fd+=_0x36c910(0x23f)+_0x42c664+'\x22>'+_0x42c664+_0x36c910(0x22f),_0x5be7fd+='<div\x20class=\x22text-right\x22\x20onclick=\x22DeleteUserFromGrp('+_0x249e54+',\x20'+_0x2caa87+_0x36c910(0x1cb),_0x5be7fd+=_0x36c910(0x1db);else{var _0x4de638=_0x36c910(0x1ff)+_0x42c664+'\x27&$top=5000';$[_0x36c910(0x201)](getItemsWithQueryItems(_0x36c910(0x1f7),_0x4de638))[_0x36c910(0x203)](function(_0x3fc8df){var _0x27a35d=_0x36c910;UResults=_0x3fc8df[_0x27a35d(0x205)];var _0x551b1e=UResults[0x0];UResults[_0x27a35d(0x1c8)]>0x0&&(_0x551b1e[_0x27a35d(0x217)][_0x27a35d(0x205)][_0x27a35d(0x1c8)]>0x0?attachmentUrl=_0x551b1e[_0x27a35d(0x217)][_0x27a35d(0x205)][0x0][_0x27a35d(0x1fe)]:attachmentUrl=_spPageContextInfo[_0x27a35d(0x218)]+_0x27a35d(0x1e7)+escapeProperly(_0x551b1e['email']),_0x5be7fd+=_0x27a35d(0x210)+attachmentUrl+'\x20alt=\x22user\x22></div>',_0x5be7fd+=_0x27a35d(0x23e)+_0x551b1e['LoginName'][_0x27a35d(0x227)]+_0x27a35d(0x1fd),_0x5be7fd+='<p\x20class=\x22member-deg\x20text-ellipsis\x22><span>'+_0x551b1e[_0x27a35d(0x1cc)]+_0x27a35d(0x1b2)+_0x551b1e['Client_Name'][_0x27a35d(0x227)]+'</span></p>',_0x5be7fd+='<p\x20class=\x22member-email\x20text-ellipsis\x22><a\x20href=\x22mailto:'+_0x42c664+'\x22>'+_0x42c664+_0x27a35d(0x22f),_0x5be7fd+='<div\x20class=\x22text-right\x22\x20onclick=\x22DeleteUserFromGrp('+_0x249e54+',\x20'+_0x2caa87+');\x22><button\x20type=\x22button\x22\x20class=\x22btn\x20remove-group-btn\x20remove-btn\x20close\x20close-round\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i></button></div>',_0x5be7fd+='</div></div></div>');});}});}}$('#idForUpdate'+_0x2caa87)['html'](_0x5be7fd);}function getPeopleUserMyGroup(_0x5abdae){var _0x54f85d=a0_0x1fbd8e;SharedUserName=[];var _0x2bf741=new Array(),_0x2842a3=$('[id^=\x27'+_0x5abdae+'\x27]'),_0x343c3b=SPClientPeoplePicker[_0x54f85d(0x1e9)][_0x2842a3[0x1]['id']],_0x521ace=_0x343c3b[_0x54f85d(0x1d9)]();if(_0x521ace[_0x54f85d(0x1c8)]>0x0){var _0x4680ac=new Array(),_0x13f3a3=new Array();for(var _0x21373e=0x0;_0x21373e<_0x521ace[_0x54f85d(0x1c8)];_0x21373e++){var _0x158243=_0x521ace[_0x21373e]['Key'],_0xf66ae7=_0x521ace[_0x21373e]['EntityType'];if(_0xf66ae7==_0x54f85d(0x24f))_0x2bf741[_0x54f85d(0x228)](GetUserIdGroup(_0x521ace[_0x21373e][_0x54f85d(0x1dc)])),SharedUserName[_0x54f85d(0x228)](_0x521ace[_0x21373e][_0x54f85d(0x1d4)]);else{var _0x158243=_0x521ace[_0x21373e][_0x54f85d(0x243)][_0x54f85d(0x24e)],_0x4d0d9d=new Array();_0x4d0d9d[_0x54f85d(0x228)](siteuser(_0x158243));var _0x4e1cc4=_0x2bf741[_0x54f85d(0x215)][_0x54f85d(0x22d)]([],_0x4d0d9d);_0x2bf741=_0x2bf741[_0x54f85d(0x215)](_0x4e1cc4);}}}return _0x2bf741;}function GetUserIdGroup(_0x183d9a){var _0x1f2882=a0_0x1fbd8e,_0x4089b0='',_0x11cd88=_0x1f2882(0x211),_0x4d2975=_spPageContextInfo[_0x1f2882(0x1ae)],_0x8fab6d=_0x183d9a;return $['ajax']({'url':_0x4d2975+_0x1f2882(0x1b4)+encodeURIComponent(_0x8fab6d)+'\x27','method':_0x1f2882(0x1ba),'headers':{'Accept':'application/json;\x20odata=verbose'},'async':![],'success':function(_0x244364){_0x4089b0=_0x244364['d']['Id'];},'error':function(_0x54fcfd){var _0x146108=_0x1f2882;console['log'](JSON[_0x146108(0x240)](_0x54fcfd));}}),_0x4089b0;}function siteuser(_0x3936ad){var _0x52d8fb=a0_0x1fbd8e,_0x4d0534=[];return $['ajax']({'url':_spPageContextInfo['webAbsoluteUrl']+'/_api/web/sitegroups/getbyid('+_0x3936ad+_0x52d8fb(0x24d),'type':'GET','async':![],'headers':{'Accept':_0x52d8fb(0x1fc)},'success':function(_0x69a305,_0x44f560,_0x42df88){var _0x11eda7=_0x52d8fb,_0xfe7749=_0x69a305['d'][_0x11eda7(0x205)];for(var _0x123d9e=0x0;_0x123d9e<_0xfe7749[_0x11eda7(0x1c8)];_0x123d9e++){_0xfe7749=$[_0x11eda7(0x1de)](_0xfe7749,function(_0x27a3d0){var _0x4fe3dd=_0x11eda7;return _0x27a3d0[_0x4fe3dd(0x227)]!==_0x4fe3dd(0x1d2);}),_0xfe7749[_0x11eda7(0x1c8)]>0x0&&_0x4d0534[_0x11eda7(0x228)](GetUserIdGroups(_0xfe7749[_0x123d9e][_0x11eda7(0x250)]));}},'error':function(_0x53fcf5,_0x30d4a6,_0x3462c5){var _0x126f4b=_0x52d8fb;console[_0x126f4b(0x235)](_0x126f4b(0x1ce));}}),_0x4d0534;}function getItemsWithQueryItems(_0x3dda17,_0x57767b){var _0x25ec04=a0_0x1fbd8e;return DeferredObj=$[_0x25ec04(0x1c0)](),$[_0x25ec04(0x1b8)]({'url':_spPageContextInfo[_0x25ec04(0x218)]+_0x25ec04(0x1ee)+_0x3dda17+'\x27)/items/'+_0x57767b,'type':_0x25ec04(0x1ba),'async':![],'headers':{'ACCEPT':_0x25ec04(0x1fc),'X-RequestDigest':$(_0x25ec04(0x229))[_0x25ec04(0x1d5)]()},'success':function(_0x2594e8){DeferredObj['resolve'](_0x2594e8['d']);},'error':function(_0x531504){var _0x38f492=_0x25ec04;DeferredObj[_0x38f492(0x1ad)](_0x531504);}}),DeferredObj['promise']();};