var a0_0xa52a9c=a0_0x27f8;(function(_0x29d34b,_0x991599){var _0x31dd46=a0_0x27f8,_0x5304a0=_0x29d34b();while(!![]){try{var _0x589a65=parseInt(_0x31dd46(0x23f))/0x1*(-parseInt(_0x31dd46(0x257))/0x2)+-parseInt(_0x31dd46(0x20d))/0x3+-parseInt(_0x31dd46(0x237))/0x4+parseInt(_0x31dd46(0x213))/0x5*(-parseInt(_0x31dd46(0x1e8))/0x6)+-parseInt(_0x31dd46(0x283))/0x7+parseInt(_0x31dd46(0x234))/0x8+parseInt(_0x31dd46(0x245))/0x9;if(_0x589a65===_0x991599)break;else _0x5304a0['push'](_0x5304a0['shift']());}catch(_0x3585ed){_0x5304a0['push'](_0x5304a0['shift']());}}}(a0_0x2e2d,0xcce53));var currentCompanyid='',contributersGroupId='';$(document)['ready'](function(){var _0x5c9c3f=a0_0x27f8;WaitMessage(),$(_0x5c9c3f(0x256))[_0x5c9c3f(0x1d5)](),currentCompanyid=titanForWork[_0x5c9c3f(0x1ef)](_0x5c9c3f(0x294)),GetGroupIDByGroupName(),currentCompanyid!=null&&currentCompanyid!=''&&(currentCompanyid[_0x5c9c3f(0x254)]('#')!=-0x1&&(currentCompanyid=currentCompanyid[_0x5c9c3f(0x1f8)]('#')[0x0]),currentCompanyid=currentCompanyid),$('#idsynch')[_0x5c9c3f(0x259)](_0x5c9c3f(0x26c),_0x5c9c3f(0x295)+currentCompanyid),GetOfficeLocation('No'),GetEmployeeList(0x0),GetCompanies(),GetDepartment(0x0),$(_0x5c9c3f(0x267))[_0x5c9c3f(0x285)](function(){var _0x47bf79=_0x5c9c3f;parseInt($(_0x47bf79(0x263))[_0x47bf79(0x1d9)]())==0x0||parseInt($(_0x47bf79(0x24f))[_0x47bf79(0x1d9)]())==0x0||parseInt($(_0x47bf79(0x1e4))[_0x47bf79(0x1d9)]())==0x0?alert(_0x47bf79(0x23a)):ValidationCheckBox()==!![]?ValidationLicencedCheckBox()==!![]&&(WaitMessage(),$['when'](AddEmployeeData())[_0x47bf79(0x23b)](function(_0xea8f50){var _0x48281c=_0x47bf79;GetEmployeeList(0x1),GetCompanies(),GetOfficeLocation('No'),GetDepartment(0x0),$('#query')[_0x48281c(0x1d9)]('');})):alert(_0x47bf79(0x244));}),$('#btnEmpUpdate')[_0x5c9c3f(0x285)](function(){var _0x40e230=_0x5c9c3f;ValidationCheckBox()==![]?alert(_0x40e230(0x244)):(WaitMessage(),$['when'](UpdateEmployeeData())['done'](function(_0x32e784){var _0x5a64c9=_0x40e230;GetEmployeeList(0x1),GetCompanies(),GetOfficeLocation('No'),GetDepartment(0x0),$('#query')[_0x5a64c9(0x1d9)]('');}));}),PageLoad(),$(_0x5c9c3f(0x1e9))[_0x5c9c3f(0x285)](function(){}),keyWordSearch(),$(_0x5c9c3f(0x263))['change'](function(){var _0x4d8b69=_0x5c9c3f;GetDepartment($(this)[_0x4d8b69(0x1d9)]()),GetOfficeLocation($(this)[_0x4d8b69(0x1d9)]());}),setTimeout(function(){CloseWaitDialog();},0x4e20);});function keyWordSearch(){var _0x3c86d1=a0_0x27f8;$(_0x3c86d1(0x1d8))['on'](_0x3c86d1(0x21b),function(){var _0x4549f7=_0x3c86d1,_0x403693=$(this)[_0x4549f7(0x1d9)](),_0x51491c=new RegExp(_0x403693,'i');$('#tableTempEmp\x20tbody')[_0x4549f7(0x281)]('tr')[_0x4549f7(0x21d)](function(){var _0x17c39f=_0x4549f7;!($(this)[_0x17c39f(0x281)]('td')['text']()[_0x17c39f(0x201)](_0x51491c)>=0x0)&&$(this)['not']('.myHead')[_0x17c39f(0x289)](),$(this)['find']('td')[_0x17c39f(0x226)]()[_0x17c39f(0x201)](_0x51491c)>=0x0&&$(this)['show']();});});}function GetGroupIDByGroupName(){var _0x5246ba=a0_0x27f8,_0x3feb7a=_spPageContextInfo[_0x5246ba(0x21e)]+_0x5246ba(0x1e6);$['ajax']({'url':_0x3feb7a,'method':_0x5246ba(0x27d),'async':![],'headers':{'Accept':_0x5246ba(0x279)},'success':function(_0x5cef37){contributersGroupId=_0x5cef37['d']['Id'];},'error':function(_0x2065d2){var _0x6dd27f=_0x5246ba;console[_0x6dd27f(0x26e)](_0x2065d2);}});}function AddUserinSharePointGroup(_0xf1e102){var _0x2ff42e=a0_0x27f8,_0x549409=_spPageContextInfo[_0x2ff42e(0x21e)]+_0x2ff42e(0x246)+contributersGroupId+_0x2ff42e(0x1ee);$[_0x2ff42e(0x216)]({'url':_0x549409,'type':_0x2ff42e(0x292),'async':![],'data':JSON[_0x2ff42e(0x293)]({'__metadata':{'type':_0x2ff42e(0x210)},'LoginName':_0xf1e102}),'headers':{'accept':_0x2ff42e(0x27c),'content-type':_0x2ff42e(0x27c),'X-RequestDigest':$(_0x2ff42e(0x1e0))[_0x2ff42e(0x1d9)]()},'success':_0x46887e,'error':_0x3ecdf5});function _0x46887e(_0xa9b5cb){var _0x2f71d0=_0x2ff42e;console[_0x2f71d0(0x26e)](_0x2f71d0(0x24d));}function _0x3ecdf5(_0x4f0c0c){console['log'](JSON['stringify'](_0x4f0c0c));}}function UpdateEmployeeData(){var _0x18a3ff=a0_0x27f8,_0x525788=$(_0x18a3ff(0x28a))[_0x18a3ff(0x249)];return $(_0x18a3ff(0x28a))['each'](function(_0x180bd8){var _0x4939e4=_0x18a3ff,_0x3ddb43=$(this)['is'](':visible');if(_0x3ddb43==!![]){var _0x42df57=$(this)['find'](_0x4939e4(0x205))[_0x4939e4(0x259)](_0x4939e4(0x1dd));if(_0x42df57==!![]){var _0x58af71=$(this)[_0x4939e4(0x281)](_0x4939e4(0x205))[_0x4939e4(0x1d9)](),_0x4b750d=$(this)[_0x4939e4(0x281)]('td')[0x1]['innerText'],_0x24f66b=$(this)[_0x4939e4(0x281)]('td')[0x2][_0x4939e4(0x1da)],_0x4ef6ea=$(this)[_0x4939e4(0x281)]('td')[0x3][_0x4939e4(0x1da)],_0xd6911c=$(this)[_0x4939e4(0x281)]('td')[0x4][_0x4939e4(0x1da)],_0x3350cd=$(this)[_0x4939e4(0x281)](_0x4939e4(0x264))[_0x4939e4(0x1d9)](),_0x2f2369=$(this)['find']('.manager')[_0x4939e4(0x1d9)](),_0x15fd4d=$(this)['find'](_0x4939e4(0x1e1))[_0x4939e4(0x1d9)](),_0x5816ee=$(this)[_0x4939e4(0x281)](_0x4939e4(0x296))[_0x4939e4(0x1d9)](),_0x1de4c0=$(this)[_0x4939e4(0x281)](_0x4939e4(0x1db))['val'](),_0x56da07=$(this)[_0x4939e4(0x281)](_0x4939e4(0x269))[_0x4939e4(0x1d9)](),_0x48aa95='';_0x5816ee!=null&&_0x5816ee!=''&&(_0x48aa95=GetDateStandardFormat(_0x5816ee));var _0x39cf7c='';_0x1de4c0!=null&&_0x1de4c0!=''&&(_0x39cf7c=GetDateStandardFormat(_0x1de4c0));var _0x37d34d='';_0x56da07!=null&&_0x56da07!=''&&(_0x37d34d=GetDateStandardFormat(_0x56da07)),(_0x4ef6ea==null||_0x4ef6ea=='')&&(_0x4ef6ea=_0x24f66b),updateManager(_0x4939e4(0x22a),_0x3350cd,_0x2f2369,_0x15fd4d,_0x48aa95,_0x39cf7c,_0x37d34d,_0x58af71);}}}),!![];}function updateManager(_0x4d0266,_0x9647ae,_0x4ec12c,_0x5c18d1,_0xe10218,_0x5bfccc,_0x3ea448,_0x39a67e){var _0x22353b=a0_0x27f8;try{var _0x55cafd,_0x420967=GetItemTypeForListName(_0x4d0266);_0x55cafd={'__metadata':{'type':_0x420967},'Designation':_0x9647ae,'Manager':_0x4ec12c,'MobileNumber':_0x5c18d1,'DOB':_0xe10218,'DOA':_0x5bfccc,'DOJ':_0x3ea448},$[_0x22353b(0x1f0)](updateItemWithID(_0x4d0266,_0x55cafd,_0x39a67e))[_0x22353b(0x23b)](function(_0x4de240){});}catch(_0x336011){console[_0x22353b(0x26e)](_0x336011['message']);}}function updateItemWithID(_0x48b61e,_0x4560cf,_0x19c302){var _0x4ccf31=a0_0x27f8,_0x3b4c79=$[_0x4ccf31(0x250)]();return $[_0x4ccf31(0x216)]({'url':_spPageContextInfo[_0x4ccf31(0x21e)]+_0x4ccf31(0x1d4)+_0x48b61e+'\x27)/GetItemById(\x27'+_0x19c302+'\x27)','type':'POST','headers':{'accept':_0x4ccf31(0x27c),'X-RequestDigest':$(_0x4ccf31(0x1e0))[_0x4ccf31(0x1d9)](),'content-Type':_0x4ccf31(0x27c),'X-Http-Method':_0x4ccf31(0x25a),'If-Match':'*'},'data':JSON[_0x4ccf31(0x293)](_0x4560cf),'async':![],'success':function(_0x141a18){var _0x292f50=_0x4ccf31;_0x3b4c79[_0x292f50(0x200)](!![]);},'error':function(_0x2bdb72){var _0x1586eb=_0x4ccf31;CloseWaitDialog(),alert(JSON[_0x1586eb(0x293)](_0x2bdb72)),_0x3b4c79[_0x1586eb(0x261)](_0x2bdb72);}}),_0x3b4c79['promise']();}function AddEmployeeData(){var _0x513a2f=a0_0x27f8,_0x3aac6f=$(_0x513a2f(0x28a))[_0x513a2f(0x249)];return $('#tableTempEmp\x20tbody\x20tr')[_0x513a2f(0x21d)](function(_0x2ae03c){var _0x2afc2f=_0x513a2f,_0x2606ca=$(this)['is'](_0x2afc2f(0x25c));if(_0x2606ca==!![]){var _0x2dcfcd=$(this)['find'](_0x2afc2f(0x205))['prop'](_0x2afc2f(0x1dd));if(_0x2dcfcd==!![]){var _0x69d848=$(this)[_0x2afc2f(0x281)]('td')[0x1][_0x2afc2f(0x1da)],_0x1768d1=$(this)['find']('td')[0x2][_0x2afc2f(0x1da)],_0x2d2a10=$(this)[_0x2afc2f(0x281)]('td')[0x3][_0x2afc2f(0x1da)],_0x268b6c=$(this)[_0x2afc2f(0x281)]('td')[0x4][_0x2afc2f(0x1da)],_0xde0338=$(this)[_0x2afc2f(0x281)](_0x2afc2f(0x264))['val'](),_0x37cc86=$(this)[_0x2afc2f(0x281)](_0x2afc2f(0x1d1))['val'](),_0x4fa3d0=$(this)[_0x2afc2f(0x281)](_0x2afc2f(0x1e1))[_0x2afc2f(0x1d9)](),_0x465d0d=$(this)[_0x2afc2f(0x281)]('.dob')[_0x2afc2f(0x1d9)](),_0x30f9f7=$(this)[_0x2afc2f(0x281)]('.doa')[_0x2afc2f(0x1d9)](),_0x478485=$(this)[_0x2afc2f(0x281)](_0x2afc2f(0x269))[_0x2afc2f(0x1d9)](),_0x131eac='';_0x465d0d!=null&&_0x465d0d!=''&&(_0x131eac=GetDateStandardFormat(_0x465d0d));var _0x2056d3='';_0x30f9f7!=null&&_0x30f9f7!=''&&(_0x2056d3=GetDateStandardFormat(_0x30f9f7));var _0x989d9b='';_0x478485!=null&&_0x478485!=''&&(_0x989d9b=GetDateStandardFormat(_0x478485)),(_0x2d2a10==null||_0x2d2a10=='')&&(_0x2d2a10=_0x1768d1),AddUserinSharePointGroup(_0x2afc2f(0x1e5)+_0x1768d1),AddNewEmployee(_0x2afc2f(0x25d),_0x69d848,_0x2d2a10,_0x1768d1,_0xde0338,_0x37cc86,_0x37cc86,_0x4fa3d0,_0x131eac,_0x2056d3,_0x989d9b);}}}),!![];}function GetDateStandardFormat(_0x529bbd){var _0x1bab94=a0_0x27f8,_0x4413a3=ConvertDateFormatToddMMyyyy(_0x529bbd),_0x52dcee=new Date(_0x4413a3),_0x51efd2=0x3c*0x3c*0x18*0x3e8,_0x6ab6ee=new Date(_0x52dcee['getTime']()),_0x2cd2c2=_0x6ab6ee[_0x1bab94(0x21c)]();return _0x2cd2c2;}function GetOfficeLocation(_0x210feb){var _0x4a5c7c=a0_0x27f8;$(_0x4a5c7c(0x1e4))[_0x4a5c7c(0x230)]()[_0x4a5c7c(0x26d)]('<option\x20value=\x220\x22>-Select\x20Office\x20Location-</option>');var _0x5d2b2e=_spPageContextInfo[_0x4a5c7c(0x21e)]+_0x4a5c7c(0x288)+_0x210feb+'\x27';$[_0x4a5c7c(0x216)]({'url':_0x5d2b2e,'headers':{'Accept':_0x4a5c7c(0x27c)},'async':![],'success':function(_0x4bfe2e){var _0x121f66=_0x4a5c7c,_0x374241=_0x4bfe2e['d'][_0x121f66(0x23d)];for(var _0x63c9fd=0x0;_0x63c9fd<_0x374241[_0x121f66(0x249)];_0x63c9fd++){$(_0x121f66(0x1e4))[_0x121f66(0x26d)]($(_0x121f66(0x20c))[_0x121f66(0x242)](_0x121f66(0x271),_0x4bfe2e['d'][_0x121f66(0x23d)][_0x63c9fd]['ID'])[_0x121f66(0x226)](_0x4bfe2e['d']['results'][_0x63c9fd][_0x121f66(0x24a)]));}},'eror':function(_0x2cb3f8){var _0x33a17b=_0x4a5c7c;console[_0x33a17b(0x26e)](_0x33a17b(0x27a));}});}function GetTempEmployeeList(_0x2535b9){var _0x403cfb=a0_0x27f8,_0x34889a=0x0,_0x4a5b64=_spPageContextInfo[_0x403cfb(0x21e)]+'/_api/web/lists/getbytitle(\x27TempEmployee\x27)/items?$select=ID,FullName,LogonName,Email,Department,Designation,Company,Manager,MobileNumber,OfficeLocation,DOB,DOA,DOJ&$top=1000';$[_0x403cfb(0x216)]({'url':_0x4a5b64,'headers':{'Accept':_0x403cfb(0x27c)},'async':!![],'success':function(_0x114dec){var _0x35387a=_0x403cfb,_0x2fdb92=_0x114dec['d'][_0x35387a(0x23d)],_0x5451a3='<div\x20id=\x27mainTablearea\x27\x20class=\x27table-responsive\x27><table\x20cellpadding=\x270\x27\x20\x20cellspacing=\x270\x27\x20border=\x271\x27\x20id=\x27tableTempEmp\x27\x20class=\x27table-width\x20tinytable\x20table\x20table-bordered\x20table-striped\x20table-hover\x20js-basic-example\x20dataTable\x20no-footer\x20employee_syn_table\x27></div><thead\x20class=\x27panel-heading\x27><tr><th\x20class=\x27nosort\x27\x20style=\x27width:40px;text-align:center;\x27><h6></h6></th><th\x20class=\x27nosort\x27><h6>Name</h6></th><th\x20\x20class=\x27nosort\x27><h6>Login</h6></th><th\x20\x20class=\x27nosort\x27><h6>Email</h6></th><th\x20class=\x27nosort\x27><h6>Department</h6></th><th\x20class=\x27nosort\x27><h6>Designation</h6></th><th\x20class=\x27nosort\x27><h6>Manager</h6></th><th\x20class=\x27nosort\x27><h6>MobileNo</h6></th><th\x20class=\x27nosort\x27><h6>DOB</h6></th><th\x20class=\x27nosort\x27><h6>DOA</h6></th><th\x20class=\x27nosort\x27><h6>DOJ</h6></th></tr></thead><tbody\x20class=\x27panel\x27>',_0x28ac47='';for(var _0x861882=0x0;_0x861882<_0x2fdb92['length'];_0x861882++){var _0x36eee9=_0x2fdb92[_0x861882][_0x35387a(0x247)];(_0x36eee9==null||_0x36eee9=='')&&(_0x36eee9='');var _0x252d42=_0x2fdb92[_0x861882][_0x35387a(0x28d)];(_0x252d42==null||_0x252d42=='')&&(_0x252d42='');var _0x44247c=_0x2fdb92[_0x861882][_0x35387a(0x258)];(_0x44247c==null||_0x44247c=='')&&(_0x44247c='');var _0x15427b=_0x2fdb92[_0x861882][_0x35387a(0x20b)];(_0x15427b==null||_0x15427b=='')&&(_0x15427b='');var _0x14c744=_0x2fdb92[_0x861882]['Designation'];(_0x14c744==null||_0x14c744=='')&&(_0x14c744='');var _0x1ef5fb=_0x2fdb92[_0x861882]['Company'];(_0x1ef5fb==null||_0x1ef5fb=='')&&(_0x1ef5fb='');var _0xedcbc9=_0x2fdb92[_0x861882][_0x35387a(0x28b)];(_0xedcbc9==null||_0xedcbc9=='')&&(_0xedcbc9='');var _0x27ce29=_0x2fdb92[_0x861882][_0x35387a(0x20a)];(_0x27ce29==null||_0x27ce29=='')&&(_0x27ce29='');var _0x1100f4=_0x2fdb92[_0x861882]['OfficeLocation'];(_0x1100f4==null||_0x1100f4=='')&&(_0x1100f4='');var _0x5abc9c=_0x2fdb92[_0x861882]['DOB'],_0x18a569='';if(_0x5abc9c==null||_0x5abc9c=='')_0x5abc9c='';else{var _0x116f73=new Date(_0x5abc9c);_0x5abc9c=$[_0x35387a(0x28e)][_0x35387a(0x1fc)](_0x35387a(0x1ec),_0x116f73);}var _0x5a91de=_0x2fdb92[_0x861882]['DOA'];if(_0x5a91de==null||_0x5a91de=='')_0x5a91de='';else{var _0x116f73=new Date(_0x5a91de);_0x5a91de=$[_0x35387a(0x28e)][_0x35387a(0x1fc)](_0x35387a(0x1ec),_0x116f73);}var _0x2abc1f=_0x2fdb92[_0x861882][_0x35387a(0x248)];if(_0x2abc1f==null||_0x2abc1f=='')_0x2abc1f='';else{var _0x116f73=new Date(_0x2abc1f);_0x2abc1f=$[_0x35387a(0x28e)][_0x35387a(0x1fc)]('mm/dd/yy',_0x116f73);}var _0x35a3eb=_0x35387a(0x235)+_0x252d42+'\x27)';employeeList[_0x35387a(0x254)](_0x252d42['toLowerCase']())==-0x1?(tempemployeeList[_0x35387a(0x254)](_0x252d42[_0x35387a(0x25e)]())==-0x1&&_0x34889a++,_0x28ac47=_0x28ac47+_0x35387a(0x227)+_0x2fdb92[_0x861882]['ID']+_0x35387a(0x1f5)+_0x36eee9+_0x35387a(0x1eb)+_0x252d42+'</td><td>'+_0x44247c+'</td><td>'+_0x15427b+_0x35387a(0x1fa)+_0x14c744+_0x35387a(0x1f3)+_0xedcbc9+_0x35387a(0x1fb)+_0x27ce29+_0x35387a(0x223)+_0x5abc9c+'\x27/></td><td><input\x20style=\x27width:\x20100%\x27\x20type=\x27text\x27\x20class=\x27doa\x27\x20value=\x27'+_0x5a91de+'\x27/></td><td><input\x20type=\x27text\x27\x20style=\x27width:\x20100%\x27\x20class=\x27doj\x27\x20value=\x27'+_0x2abc1f+_0x35387a(0x209)):tempemployeeList[_0x35387a(0x254)](_0x252d42[_0x35387a(0x25e)]())==-0x1&&_0x34889a++;}var _0x102475=_0x5451a3+_0x28ac47+_0x35387a(0x1ea),_0x429af4=$(_0x35387a(0x25f));_0x429af4[_0x35387a(0x1de)](''),_0x429af4['append'](_0x102475),$('.ddlpagingNotAllocated')[_0x35387a(0x259)](_0x35387a(0x20e),0x1),$(_0x35387a(0x296))['datepicker']({'changeMonth':!![],'changeYear':!![],'yearRange':_0x35387a(0x1e2)}),$('.dob')['datepicker'](_0x35387a(0x278),_0x35387a(0x215),_0x35387a(0x273)),$(_0x35387a(0x1db))[_0x35387a(0x28e)]({'changeMonth':!![],'changeYear':!![],'yearRange':'-70:+0'}),$(_0x35387a(0x1db))['datepicker'](_0x35387a(0x278),_0x35387a(0x215),_0x35387a(0x273)),$(_0x35387a(0x269))[_0x35387a(0x28e)]({'changeMonth':!![],'changeYear':!![],'yearRange':_0x35387a(0x1e2)}),$(_0x35387a(0x269))['datepicker'](_0x35387a(0x278),_0x35387a(0x215),_0x35387a(0x273)),$(_0x35387a(0x296))[_0x35387a(0x21d)](function(){var _0x1731a3=_0x35387a;$(this)[_0x1731a3(0x259)](_0x1731a3(0x265),!![]);}),$(_0x35387a(0x1db))[_0x35387a(0x21d)](function(){var _0x5cadb5=_0x35387a;$(this)[_0x5cadb5(0x259)]('readonly',!![]);}),$('.doj')['each'](function(){var _0x3b534a=_0x35387a;$(this)[_0x3b534a(0x259)]('readonly',!![]);}),_0x2535b9==0x0&&($('#synchedMessage')[_0x35387a(0x222)](),$(_0x35387a(0x262))[_0x35387a(0x226)](_0x35387a(0x240)),setTimeout(function(){var _0x10ca74=_0x35387a;$(_0x10ca74(0x262))[_0x10ca74(0x289)]();},0x2710)),GenerateTable(),CloseWaitDialog();},'eror':function(_0x44a3a4){var _0x59325a=_0x403cfb;CloseWaitDialog(),console[_0x59325a(0x26e)](_0x59325a(0x27a));}});}var sorter;function GenerateTable(){var _0x5e5682=a0_0x27f8;sorter=new TINY['table']['sorter']('sorter',_0x5e5682(0x238),{'headclass':_0x5e5682(0x270),'ascclass':'asc','descclass':_0x5e5682(0x231),'evenclass':_0x5e5682(0x290),'oddclass':'oddrow','evenselclass':_0x5e5682(0x228),'oddselclass':'oddselected','paginate':!![],'size':0xa,'colddid':_0x5e5682(0x1fd),'currentid':_0x5e5682(0x217),'totalid':_0x5e5682(0x268),'startingrecid':_0x5e5682(0x232),'endingrecid':_0x5e5682(0x27b),'totalrecid':'totalrecords','hoverid':_0x5e5682(0x1f6),'pageddid':_0x5e5682(0x207),'navid':'tablenav','sortdir':0x1,'init':!![]});}function getFormattedDate(_0x3527b2){var _0x1f1ec2=a0_0x27f8,_0x1841d7=new Date(_0x3527b2),_0x50ec6f=_0x1841d7[_0x1f1ec2(0x220)](),_0x2694c6=(0x1+_0x1841d7['getMonth']())[_0x1f1ec2(0x282)]();_0x2694c6=_0x2694c6[_0x1f1ec2(0x249)]>0x1?_0x2694c6:'0'+_0x2694c6;var _0x336abc=_0x1841d7[_0x1f1ec2(0x211)]()[_0x1f1ec2(0x282)]();return _0x336abc=_0x336abc['length']>0x1?_0x336abc:'0'+_0x336abc,_0x336abc+'/'+_0x2694c6+'/'+_0x50ec6f;}function EmployeesCompanies(_0x123b57){var _0x510ad2=a0_0x27f8;try{var _0x465c1f=_spPageContextInfo[_0x510ad2(0x21e)]+_0x510ad2(0x251)+_0x123b57+'\x27';$[_0x510ad2(0x216)]({'url':_0x465c1f,'headers':{'Accept':_0x510ad2(0x27c)},'async':!![],'success':function(_0x40c982){var _0x375478=_0x510ad2,_0x24a6ab=_0x40c982['d'][_0x375478(0x23d)],_0x230281='<ul><li><strong></strong></li>',_0x2ccfb6='';for(var _0x5b0f13=0x0;_0x5b0f13<_0x24a6ab['length'];_0x5b0f13++){var _0x867478=_0x24a6ab[_0x5b0f13][_0x375478(0x28d)]['UserName'];(_0x867478==null||_0x867478=='')&&(_0x867478='');var _0x235c89=_0x24a6ab[_0x5b0f13]['Company'][_0x375478(0x280)];(_0x235c89==null||_0x235c89=='')&&(_0x235c89='');var _0x2bd1a5=_0x24a6ab[_0x5b0f13][_0x375478(0x20b)][_0x375478(0x25b)];(_0x2bd1a5==null||_0x2bd1a5=='')&&(_0x2bd1a5=''),_0x2ccfb6=_0x2ccfb6+_0x375478(0x22e)+_0x235c89+'==>'+_0x2bd1a5+_0x375478(0x202);}var _0x53b010=_0x230281+_0x2ccfb6+'</ul>',_0x411a04=$(_0x375478(0x26f));_0x411a04[_0x375478(0x1de)](''),_0x24a6ab[_0x375478(0x249)]==0x0&&(_0x53b010=_0x53b010+_0x375478(0x219)),_0x411a04[_0x375478(0x26d)](_0x53b010),CloseWaitDialog(),$('#modalTitanPreview')[_0x375478(0x204)](_0x375478(0x222));},'eror':function(_0x53e35d){var _0x1ac01f=_0x510ad2;CloseWaitDialog(),console[_0x1ac01f(0x26e)](_0x1ac01f(0x27a));}});}catch(_0x5c0d6b){CloseWaitDialog(),alert(_0x510ad2(0x206));}}function EmployeeCheckListValidation(_0x532cb6,_0x169e9b,_0xc410e0){var _0x28eeda=a0_0x27f8,_0x11089f=![];try{var _0x16bc6d=_spPageContextInfo[_0x28eeda(0x21e)]+_0x28eeda(0x203)+_0x532cb6+_0x28eeda(0x241)+_0x169e9b+'\x27';$[_0x28eeda(0x216)]({'url':_0x16bc6d,'headers':{'Accept':_0x28eeda(0x27c)},'async':![],'success':function(_0x311cc9){var _0x109f38=_0x28eeda,_0x35a504=_0x311cc9['d'][_0x109f38(0x23d)];_0x35a504[_0x109f38(0x249)]>0x0&&(_0x11089f=!![]);},'eror':function(_0xff6e58){var _0x4b0257=_0x28eeda;CloseWaitDialog(),console[_0x4b0257(0x26e)]('error');}});}catch(_0x3e47dd){alert(_0x28eeda(0x206));}return _0x11089f;}function GetCompanies(){var _0x42fb38=a0_0x27f8;$(_0x42fb38(0x263))[_0x42fb38(0x230)]()[_0x42fb38(0x26d)](_0x42fb38(0x1f9));var _0xe74eb8=_spPageContextInfo[_0x42fb38(0x21e)]+'/_api/web/lists/getbytitle(\x27Companies\x27)/items?$select=ID,CompanyName';$['ajax']({'url':_0xe74eb8,'headers':{'Accept':_0x42fb38(0x27c)},'async':![],'success':function(_0x3b5cb5){var _0x35218d=_0x42fb38,_0x21729c=_0x3b5cb5['d'][_0x35218d(0x23d)];for(var _0x177185=0x0;_0x177185<_0x21729c['length'];_0x177185++){$('#ddlTempCompany')[_0x35218d(0x26d)]($(_0x35218d(0x20c))['attr'](_0x35218d(0x271),_0x3b5cb5['d'][_0x35218d(0x23d)][_0x177185]['ID'])[_0x35218d(0x226)](_0x3b5cb5['d'][_0x35218d(0x23d)][_0x177185][_0x35218d(0x280)]));}},'eror':function(_0xf503f7){var _0x4424ff=_0x42fb38;console['log'](_0x4424ff(0x27a));}});}function a0_0x2e2d(){var _0x33068a=['.empidchk','LogonName\x20is\x20not\x20in\x20valid\x20format\x20!','pagedropdown','/_api/SP.OAuth.Token/Acquire','\x27/></td></tr>','MobileNumber','Department','<option></option>','4472187XbADLO','selectedIndex','get_message','SP.User','getDate','givenName','18695AdvDtH','?$top=100&$expand=LogonName&$select=ID,LogonName/UserName&$filter=Status\x20eq\x20\x27Active\x27','dateFormat','ajax','currentpage','/_api/web/lists/getbytitle(\x27Departments\x27)/items?$select=ID,CompanyIDId/ID,DepartmentName&$filter=CompanyIDId\x20\x20eq\x20\x27','<div\x20style=\x27width:100%;text-align:\x20center;font-size:14px\x27>Not\x20Defined\x20Yet</div>','mail','keyup','toISOString','each','webAbsoluteUrl','@odata.nextLink','getFullYear','HomePhone','show','\x27/></td><td><input\x20style=\x27width:\x20100%\x27\x20type=\x27text\x27\x20class=\x27dob\x27\x20value=\x27','SP.UserProfiles.js','application/json;odata=nometadata','text','<tr><td\x20style=\x27text-align:center;\x27><input\x20type=\x27checkbox\x27\x20class=\x27empidchk\x27\x20name=\x27empid\x27\x20value=','evenselected','https://graph.microsoft.com/v1.0/users?$top=100','TempEmployee','Company','MiddleName','push','<li>','#tableTempEmpAllocated\x20tbody\x20tr','empty','desc','startrecord','LastName','7040336twDixU','javascript:EmployeesCompanies(\x27','Item\x20Added','5954624GqwjoO','tableTempEmp','siteAbsoluteUrl','Please\x20select\x20company,department\x20and\x20office\x20location.','done','JoiningDate','results','UserName','1jJKlAg','Successfully\x20synced.','\x27\x20and\x20CompanyId\x20eq\x20\x27','attr','Title','Please\x20select\x20at\x20least\x20one\x20record\x20from\x20list.','54126702WKdFRw','/_api/web/sitegroups(','FullName','DOJ','length','OfficeName','Error:\x20',',\x0a\x20\x20Remaining\x20Licence\x20is\x20:\x20\x20','User\x20Added','User\x20:','#ddlTempDepartment','Deferred','/_api/web/lists/getbytitle(\x27Employees\x27)/items?$select=ID,FullName,LogonName/UserName,Department/DepartmentName,Company/CompanyName,Company/ID&$expand=LogonName,Company,Department&$filter=LogonName/UserName\x20\x20eq\x20\x27','Bearer\x20','https://graph.microsoft.com','indexOf','promise','[data-toggle=\x22tooltip\x22]','315334meiaOP','Email','prop','PATCH','DepartmentName',':visible','Employees','toLowerCase','#mainDivArea','DateOfBirth','reject','#synchedMessage','#ddlTempCompany','.desgination','readonly','/_api/web/lists/getbytitle(\x27Employees\x27)/items','#btnEmpSubmit','totalpages','.doj','OfficeLocation','displayName','href','append','log','#mainDivCompanies','head','value','surname','dd/mm/yy','#EXT#','/_api/web/siteusers(@v)?@v=\x27','join','selectedItemsCount\x20:','option','application/json;\x20odata=verbose','error','endrecord','application/json;odata=verbose','GET','jobTitle','OtherMobileNumber','CompanyName','find','toString','8777734gSoUbH','<option\x20value=\x220\x22>-Select\x20Department-</option>','click','\x27)/items','dd/MM/yyyy','/_api/web/lists/GetByTitle(\x27OfficeLocation\x27)/items?$select=ID,OfficeName,CompanyID/ID&$expand=CompanyID&$filter=OfficeLocationId\x20eq\x20\x270\x27\x20and\x20CompanyID/ID\x20eq\x20\x27','hide','#tableTempEmp\x20tbody\x20tr','Manager','.btnMoreEmployeeListSynch','LogonName','datepicker','waitDialog','evenrow','parent','POST','stringify','CompanyId','../Pages/EmployeeSynchronous.aspx?WebAppId=','.dob','Total\x20Licenced\x20:','SP.js','.manager','deleted\x20item','message','/_api/web/lists/getbytitle(\x27','tooltip','responseText','json','#search_field','val','innerText','.doa','?$top=1000&$expand=LogonName&$select=ID,LogonName/UserName','checked','html','Designation','#__REQUESTDIGEST','.mobile','-70:+0','toUpperCase','#ddlTempOfficeLocation','i:0#.f|membership|','/_api/web/sitegroups/getbyname(\x27Contributors\x27)?$select=id','application/json;odata.metadata=none','2670PrMUkB','#btnGetEmp','</tbody></table>','</td><td>','mm/dd/yy','DateOfAnniversary',')/users','getQueryStringParameter','when','access_token','/_api/Web/Lists/getByTitle(\x27TempEmployee\x27)/getItemById(','\x27/></td><td><input\x20style=\x27width:\x20100%\x27\x20type=\x27text\x27\x20class=\x27manager\x27\x20value=\x27','/_api/web/lists/getByTitle(\x27TempEmployee\x27)/items','></td><td>','selectedrow','\x20is\x20not\x20valid\x20user\x20!','split','<option\x20value=\x220\x22>-Select\x20Company-</option>','</td><td><input\x20type=\x27text\x27\x20style=\x27width:\x20100%\x27\x20class=\x27desgination\x27\x20value=\x27','\x27/></td><td><input\x20style=\x27width:\x20100%\x27\x20type=\x27text\x27\x20class=\x27mobile\x27\x20value=\x27','formatDate','columns','close','You\x20don\x27t\x20have\x20enough\x20licence\x20\x0a\x20Consumed\x20Licence\x20\x20:\x20','resolve','search','</li>','/_api/web/lists/getbytitle(\x27Employees\x27)/items?$select=ID,DepartmentId,LogonName/UserName,Company/ID&$expand=LogonName,Company&$filter=LogonName/UserName\x20\x20eq\x20\x27','modal'];a0_0x2e2d=function(){return _0x33068a;};return a0_0x2e2d();}function ValidationCheckBox(){var _0x3c9314=a0_0x27f8,_0x509b83=![];return $('#tableTempEmp\x20tbody\x20tr')[_0x3c9314(0x21d)](function(_0x2d0f36){var _0x144835=_0x3c9314,_0x86d1cb=$(this)['is'](_0x144835(0x25c));if(_0x86d1cb==!![]){var _0x1e4a84=$(this)[_0x144835(0x281)](_0x144835(0x205))[_0x144835(0x259)](_0x144835(0x1dd));_0x1e4a84==!![]&&(_0x509b83=!![]);}}),_0x509b83;}function ValidationLicencedCheckBox(){var _0x3aa4b0=a0_0x27f8,_0x51d898=!![],_0x336da6=0x0;$(_0x3aa4b0(0x28a))['each'](function(_0x2b6402){var _0x2533b0=_0x3aa4b0,_0x4c4b2f=$(this)['is'](_0x2533b0(0x25c));if(_0x4c4b2f==!![]){var _0x34ae22=$(this)[_0x2533b0(0x281)](_0x2533b0(0x205))[_0x2533b0(0x259)](_0x2533b0(0x1dd));_0x34ae22==!![]&&_0x336da6++;}}),console[_0x3aa4b0(0x26e)](_0x3aa4b0(0x277)+_0x336da6);var _0x4d1abb=GetLicencedUsersCount(),_0x536d3f=_0x4d1abb+_0x336da6,_0x46de71=UsersLicenceRequired;console['log'](_0x3aa4b0(0x1cf)+_0x46de71);if(_0x536d3f>_0x46de71){_0x51d898=![];var _0x13d41f=_0x46de71-_0x4d1abb;alert(_0x3aa4b0(0x1ff)+_0x4d1abb+_0x3aa4b0(0x24c)+_0x13d41f);}return _0x51d898;}function ValidationCheckBoxAllocated(){var _0x3f435a=a0_0x27f8,_0x289563=![];return $(_0x3f435a(0x22f))['each'](function(_0x4c2587){var _0x5df33c=_0x3f435a,_0x1407d0=$(this)['is'](_0x5df33c(0x25c));if(_0x1407d0==!![]){var _0x5192be=$(this)[_0x5df33c(0x281)]('.empidchk')['prop']('checked');_0x5192be==!![]&&(_0x289563=!![]);}}),_0x289563;}function GetDepartment(_0x111171){var _0x2e2930=a0_0x27f8;$('#ddlTempDepartment')['empty']()[_0x2e2930(0x26d)](_0x2e2930(0x284));var _0x18f6d9=_spPageContextInfo[_0x2e2930(0x21e)]+_0x2e2930(0x218)+_0x111171+'\x27';$['ajax']({'url':_0x18f6d9,'headers':{'Accept':_0x2e2930(0x27c)},'async':![],'success':function(_0x40353e){var _0x1748dc=_0x2e2930,_0x2d0fdc=_0x40353e['d'][_0x1748dc(0x23d)];for(var _0x396357=0x0;_0x396357<_0x2d0fdc['length'];_0x396357++){$(_0x1748dc(0x24f))[_0x1748dc(0x26d)]($(_0x1748dc(0x20c))[_0x1748dc(0x242)](_0x1748dc(0x271),_0x40353e['d'][_0x1748dc(0x23d)][_0x396357]['ID'])['text'](_0x40353e['d'][_0x1748dc(0x23d)][_0x396357][_0x1748dc(0x25b)]));}},'eror':function(_0x4032ab){var _0x31c2a4=_0x2e2930;console[_0x31c2a4(0x26e)]('error');}});}function AddNewEmployee(_0x4d2ff0,_0xbc460b,_0x299ae8,_0x2f1a7e,_0x33beb5,_0x2cb731,_0x115f68,_0x90b6a1,_0x2f6b0b,_0x20aa64,_0x4c53c9){var _0xd2d45b=a0_0x27f8;try{var _0x56a6ea=GetUserId(_0x2f1a7e);if(_0x56a6ea==''||_0x56a6ea==null)alert(_0xd2d45b(0x24e)+_0x2f1a7e+_0xd2d45b(0x1f7));else{var _0x57b122=parseInt($('#ddlTempCompany')[_0xd2d45b(0x1d9)]()),_0x43ce16=parseInt($(_0xd2d45b(0x24f))['val']()),_0x366ed9=parseInt($(_0xd2d45b(0x1e4))[_0xd2d45b(0x1d9)]()),_0x2bffcf,_0x11f408=GetItemTypeForListName(_0x4d2ff0);_0x2bffcf={'__metadata':{'type':_0x11f408},'CompanyId':_0x57b122,'DepartmentId':_0x43ce16,'FullName':_0xbc460b,'Email':_0x299ae8,'ParentId':'-1','LogonNameId':_0x56a6ea,'Manager':_0x2cb731,'OfficeLocationId':_0x366ed9,'MobileNumber':_0x90b6a1,'DateOfBirth':_0x2f6b0b,'DateOfAnniversary':_0x20aa64,'JoiningDate':_0x4c53c9,'Designation':_0x33beb5,'PrimaryCompany':'Primary','Status':'Active'},(_0x56a6ea==''||_0x56a6ea==null)&&delete _0x2bffcf[_0xd2d45b(0x294)],(_0x2f6b0b==null||_0x2f6b0b=='')&&delete _0x2bffcf[_0xd2d45b(0x260)],(_0x20aa64==null||_0x20aa64=='')&&delete _0x2bffcf[_0xd2d45b(0x1ed)],(_0x4c53c9==null||_0x4c53c9=='')&&delete _0x2bffcf[_0xd2d45b(0x23c)],AddItemToList(_0x4d2ff0,_0x2bffcf,![]);}}catch(_0x39ad45){console[_0xd2d45b(0x26e)](_0x39ad45['message']);}}function GetItemTypeForListName(_0x5054b4){var _0x3e151d=a0_0x27f8;return'SP.Data.'+_0x5054b4['charAt'](0x0)[_0x3e151d(0x1e3)]()+_0x5054b4[_0x3e151d(0x1f8)]('\x20')[_0x3e151d(0x276)]('')['slice'](0x1)+'ListItem';}function AddItemToList(_0x2ffd54,_0x20675a,_0x2f2859){var _0x2ba3db=a0_0x27f8,_0x895a52=$[_0x2ba3db(0x250)]();return $[_0x2ba3db(0x216)]({'url':_spPageContextInfo[_0x2ba3db(0x21e)]+'/_api/web/lists/getbytitle(\x27'+_0x2ffd54+_0x2ba3db(0x286),'type':_0x2ba3db(0x292),'async':_0x2f2859,'headers':{'accept':'application/json;odata=verbose','X-RequestDigest':$(_0x2ba3db(0x1e0))[_0x2ba3db(0x1d9)](),'content-Type':_0x2ba3db(0x27c)},'data':JSON[_0x2ba3db(0x293)](_0x20675a),'success':function(_0x4b789e){_0x895a52['resolve'](_0x4b789e);},'error':function(_0x42d7c0){var _0x192270=_0x2ba3db;alert(JSON[_0x192270(0x293)](_0x42d7c0)),_0x895a52[_0x192270(0x261)](_0x42d7c0);}}),_0x895a52[_0x2ba3db(0x255)]();}function GetUserId(_0xe55ab5){var _0x1aff82=a0_0x27f8,_0x935353='',_0x35fca=_0x1aff82(0x1e5),_0x309be3=_spPageContextInfo[_0x1aff82(0x239)],_0x4e5f77=_0x35fca+_0xe55ab5;return $['ajax']({'url':_0x309be3+_0x1aff82(0x275)+encodeURIComponent(_0x4e5f77)+'\x27','method':_0x1aff82(0x27d),'headers':{'Accept':_0x1aff82(0x279)},'async':![],'success':function(_0x340562){_0x935353=_0x340562['d']['Id'];},'error':function(_0x3c0c96){var _0x386161=_0x1aff82;console[_0x386161(0x26e)](JSON[_0x386161(0x293)](_0x3c0c96));}}),_0x935353;}function ConvertDateFormatToddMMyyyy(_0x5d4003){var _0x5c3d85=a0_0x27f8,_0x357644=stringToDate(_0x5d4003,_0x5c3d85(0x287),'/');return _0x357644;}function stringToDate(_0x5299c4,_0x5ec596,_0x15fbcb){var _0x108033=a0_0x27f8,_0x295d06=_0x5ec596[_0x108033(0x25e)](),_0x401d06=_0x295d06[_0x108033(0x1f8)](_0x15fbcb),_0x2e4dac=_0x5299c4[_0x108033(0x1f8)](_0x15fbcb),_0x545eb2=_0x401d06['indexOf']('mm'),_0x14a094=_0x401d06[_0x108033(0x254)]('dd'),_0x2bc7c9=_0x401d06[_0x108033(0x254)]('yyyy'),_0x54ea12=parseInt(_0x2e4dac[_0x545eb2]);_0x54ea12-=0x1;var _0x518309=new Date(_0x2e4dac[_0x2bc7c9],_0x54ea12,_0x2e4dac[_0x14a094]);return _0x518309;}function a0_0x27f8(_0x4f5d50,_0x10eba1){var _0x2e2dca=a0_0x2e2d();return a0_0x27f8=function(_0x27f84e,_0x69cd8b){_0x27f84e=_0x27f84e-0x1cf;var _0x3b0eaf=_0x2e2dca[_0x27f84e];return _0x3b0eaf;},a0_0x27f8(_0x4f5d50,_0x10eba1);}var employeeList=new Array(),tempemployeeList=new Array();function GetEmployeeList(_0x1605e2){var _0x4676bb=a0_0x27f8;employeeList=[],WaitMessage();var _0x15f68e=_0x4676bb(0x1dc),_0x1125f1=_spPageContextInfo[_0x4676bb(0x21e)]+_0x4676bb(0x266)+_0x15f68e;$[_0x4676bb(0x216)]({'url':_0x1125f1,'data':{'format':_0x4676bb(0x1d7)},'type':_0x4676bb(0x27d),'dataType':_0x4676bb(0x1d7),'async':![],'success':function(_0x3b3231){var _0x1e1012=_0x4676bb,_0x57b12c=_0x3b3231;for(var _0x56ae36=0x0;_0x56ae36<_0x57b12c[_0x1e1012(0x271)][_0x1e1012(0x249)];_0x56ae36++){if(_0x57b12c[_0x1e1012(0x271)][_0x56ae36]['LogonName']!=undefined){var _0x116641=_0x57b12c[_0x1e1012(0x271)][_0x56ae36][_0x1e1012(0x28d)][_0x1e1012(0x23e)];_0x116641!=null&&(employeeList[_0x1e1012(0x254)](_0x116641[_0x1e1012(0x25e)]())==-0x1&&employeeList['push'](_0x116641[_0x1e1012(0x25e)]()));}}}}),_0x1605e2==0x1&&GetTempEmployeeList(_0x1605e2);}function GetTempEmployee(){var _0x283c1f=a0_0x27f8;tempemployeeList=[];var _0x144f5b='?$top=100&$select=ID,LogonName',_0x328b3d=_spPageContextInfo[_0x283c1f(0x21e)]+'/_api/web/lists/getbytitle(\x27TempEmployee\x27)/items'+_0x144f5b;$[_0x283c1f(0x216)]({'url':_0x328b3d,'data':{'format':'json'},'type':_0x283c1f(0x27d),'dataType':'json','async':![],'success':function(_0x53bcb8){var _0x201d50=_0x283c1f,_0x3f587f=_0x53bcb8;for(var _0x1aed7b=0x0;_0x1aed7b<_0x3f587f['value'][_0x201d50(0x249)];_0x1aed7b++){var _0x45eac5=_0x3f587f[_0x201d50(0x271)][_0x1aed7b][_0x201d50(0x28d)];tempemployeeList[_0x201d50(0x254)](_0x45eac5['toLowerCase']())==-0x1&&tempemployeeList[_0x201d50(0x22d)](_0x45eac5[_0x201d50(0x25e)]());}}});}function WaitMessage(){var _0x390256=a0_0x27f8;waitingDialog[_0x390256(0x222)]();}function CloseWaitDialog(){waitingDialog['hide']();}function CloseWaitDialog2(){var _0x250b1d=a0_0x27f8;window['frameElement']!=null?window['parent'][_0x250b1d(0x28f)]!=null&&window[_0x250b1d(0x291)][_0x250b1d(0x28f)][_0x250b1d(0x1fe)]():window[_0x250b1d(0x291)][_0x250b1d(0x28f)]!=null&&window['parent'][_0x250b1d(0x28f)][_0x250b1d(0x1fe)]();}var scriptbase=_spPageContextInfo['webAbsoluteUrl']+'/_layouts/15/';function PageLoad(){var _0x188432=a0_0x27f8;$(_0x188432(0x28c))[_0x188432(0x285)](function(){GraphAccessTokenTogetUserDetails();}),$['getScript'](scriptbase+_0x188432(0x1d0),function(){var _0x52192=_0x188432;$['getScript'](scriptbase+_0x52192(0x224),ReadyFucnction);});}function ReadyFucnction(){var _0x4c3e1f=a0_0x27f8;$[_0x4c3e1f(0x1f0)](GetTempEmployee())[_0x4c3e1f(0x23b)](function(_0x26f40a){GraphAccessTokenTogetUserDetails();});}function GraphAccessTokenTogetUserDetails(){var _0xd78e47=a0_0x27f8,_0x1045bb=new jQuery[(_0xd78e47(0x250))](),_0x593c47={'X-RequestDigest':$(_0xd78e47(0x1e0))[_0xd78e47(0x1d9)](),'accept':_0xd78e47(0x225),'content-type':_0xd78e47(0x225)},_0x3e377f={'resource':_0xd78e47(0x253)};return $['ajax']({'url':_spPageContextInfo[_0xd78e47(0x21e)]+_0xd78e47(0x208),'headers':_0x593c47,'type':_0xd78e47(0x292),'data':JSON[_0xd78e47(0x293)](_0x3e377f),'success':function(_0x2a9908){var _0x614270=_0xd78e47,_0x18b07c=_0x2a9908[_0x614270(0x1f1)];GetUsersDtails(_0x18b07c),_0x1045bb['resolve'](_0x18b07c);},'error':function(_0x34e7a9,_0xe2b63f,_0x24936b){var _0x5e6379=_0xd78e47;console[_0x5e6379(0x26e)](_0x34e7a9[_0x5e6379(0x1d6)]),_0x1045bb[_0x5e6379(0x261)](_0x34e7a9[_0x5e6379(0x1d6)]);}}),_0x1045bb[_0xd78e47(0x255)]();}var odurlGraphUserRestQuery=a0_0xa52a9c(0x229),_NextToken;function GetUsersDtails(_0x1ce7e6){var _0x4221d7=a0_0xa52a9c;_NextToken=_0x1ce7e6,$[_0x4221d7(0x216)]({'url':odurlGraphUserRestQuery,'dataType':_0x4221d7(0x1d7),'headers':{'Authorization':_0x4221d7(0x252)+_0x1ce7e6},'accept':_0x4221d7(0x1e7),'success':function(_0x44dc64){var _0x785e2e=_0x4221d7,_0x2d8f80=new Array(),_0x3f00eb=_0x44dc64[_0x785e2e(0x271)];for(var _0x1d02eb=0x0;_0x1d02eb<_0x44dc64[_0x785e2e(0x271)]['length'];_0x1d02eb++){var _0x51fefc=_0x3f00eb[_0x1d02eb][_0x785e2e(0x212)],_0x417789='',_0x4c8caa=_0x3f00eb[_0x1d02eb][_0x785e2e(0x272)],_0x4f8976=_0x3f00eb[_0x1d02eb][_0x785e2e(0x26b)],_0xf097bc=_0x3f00eb[_0x1d02eb]['userPrincipalName'],_0x2f4fff=_0x3f00eb[_0x1d02eb][_0x785e2e(0x21a)],_0x24d7cb='',_0x507adf=_0x3f00eb[_0x1d02eb][_0x785e2e(0x27e)],_0x3aa5f5='',_0x396a43='',_0x579d70=_0x3f00eb[_0x1d02eb]['mobilePhone'],_0x26d558='',_0x139dfb='',_0x3f7cbe='';if(_0xf097bc[_0x785e2e(0x254)](_0x785e2e(0x274))==-0x1){var _0x416c39=UserProfileProperties(_0x51fefc,_0x417789,_0x4c8caa,_0x4f8976,_0xf097bc,_0x2f4fff,_0x24d7cb,_0x507adf,_0x3aa5f5,_0x396a43,_0x579d70,_0x26d558,_0x139dfb,_0x3f7cbe);_0x2d8f80[_0x785e2e(0x22d)](_0x416c39);}else{var _0x416c39=UserProfileProperties(_0x51fefc,_0x417789,_0x4c8caa,_0x4f8976,_0xf097bc,_0x2f4fff,_0x24d7cb,_0x507adf,_0x3aa5f5,_0x396a43,_0x579d70,_0x26d558,_0x139dfb,_0x3f7cbe);_0x2d8f80[_0x785e2e(0x22d)](_0x416c39);}}for(var _0x1d02eb=0x0;_0x1d02eb<_0x2d8f80[_0x785e2e(0x249)];_0x1d02eb++){var _0x51fefc=_0x2d8f80[_0x1d02eb]['FirstName'],_0x417789=_0x2d8f80[_0x1d02eb]['MiddleName'],_0x4c8caa=_0x2d8f80[_0x1d02eb]['LastName'],_0x4f8976=_0x2d8f80[_0x1d02eb][_0x785e2e(0x247)],_0xf097bc=_0x2d8f80[_0x1d02eb][_0x785e2e(0x28d)],_0x2f4fff=_0x2d8f80[_0x1d02eb][_0x785e2e(0x258)],_0x24d7cb=_0x2d8f80[_0x1d02eb][_0x785e2e(0x20b)],_0x507adf=_0x2d8f80[_0x1d02eb][_0x785e2e(0x1df)],_0x3aa5f5=_0x2d8f80[_0x1d02eb][_0x785e2e(0x22b)],_0x396a43=_0x2d8f80[_0x1d02eb]['Manager'],_0x579d70=_0x2d8f80[_0x1d02eb]['MobileNumber'],_0x26d558=_0x2d8f80[_0x1d02eb]['HomePhone'],_0x139dfb=_0x2d8f80[_0x1d02eb][_0x785e2e(0x26a)],_0x3f7cbe=_0x2d8f80[_0x1d02eb][_0x785e2e(0x27f)];{var _0x49341b='';{}tempemployeeList[_0x785e2e(0x254)](_0xf097bc)==-0x1&&(CreateListItem(_0x51fefc,_0x417789,_0x4c8caa,_0x4f8976,_0xf097bc,_0x2f4fff,_0x24d7cb,_0x507adf,_0x3aa5f5,_0x49341b,_0x579d70,_0x26d558,_0x139dfb,_0x3f7cbe),tempemployeeList['push'](_0xf097bc));}}_0x44dc64[_0x785e2e(0x21f)]!=null?(odurlGraphUserRestQuery=_0x44dc64['@odata.nextLink'],GetUsersDtails(_NextToken)):$(_0x785e2e(0x28c))[_0x785e2e(0x289)](),GetTempEmployeeList(0x0),CloseWaitDialog();}});}function UserProfileProperties(_0x53e97f,_0x29d042,_0x3146ba,_0x10d57a,_0x775b9,_0x48c661,_0x41ca48,_0x5dab62,_0x34969c,_0xe2d58c,_0x55fb0f,_0x1fa4aa,_0x4b6442,_0x227989){var _0x2c1190=a0_0xa52a9c,_0x36e1c7={};return _0x36e1c7['FirstName']=_0x53e97f,_0x36e1c7[_0x2c1190(0x22c)]=_0x29d042,_0x36e1c7[_0x2c1190(0x233)]=_0x3146ba,_0x36e1c7['FullName']=_0x10d57a,_0x36e1c7[_0x2c1190(0x28d)]=_0x775b9,_0x36e1c7['Email']=_0x48c661,_0x36e1c7[_0x2c1190(0x20b)]=_0x41ca48,_0x36e1c7['Designation']=_0x5dab62,_0x36e1c7[_0x2c1190(0x22b)]=_0x34969c,_0x36e1c7['Manager']=_0xe2d58c,_0x36e1c7[_0x2c1190(0x20a)]=_0x55fb0f,_0x36e1c7[_0x2c1190(0x221)]=_0x1fa4aa,_0x36e1c7['OfficeLocation']=_0x4b6442,_0x36e1c7['OtherMobileNumber']=_0x227989,_0x36e1c7;}function CreateListItem(_0x26daf1,_0x346842,_0x3692f2,_0x22e043,_0x500d04,_0x371101,_0x23977f,_0x3380ad,_0x261ff5,_0x5c064c,_0x153907,_0x40065b,_0x184bde,_0x391e68){var _0x45ddf5=a0_0xa52a9c,_0xf7ff69=_0x45ddf5(0x22a);try{var _0x504379=_0x371101;(_0x504379==null||_0x504379=='')&&(_0x504379=_0x500d04);var _0x492e42,_0x518333=GetItemTypeForListName(_0xf7ff69);_0x492e42={'__metadata':{'type':_0x518333},'FirstName':_0x26daf1,'LastName':_0x3692f2,'MiddleName':_0x346842,'FullName':_0x22e043,'LogonName':_0x500d04,'Email':_0x504379,'Department':_0x23977f,'Designation':_0x3380ad,'Company':_0x261ff5,'Manager':_0x5c064c,'MobileNumber':_0x153907,'HomePhone':_0x40065b,'OfficeLocation':_0x184bde,'OtherMobileNumber':_0x391e68},$[_0x45ddf5(0x1f0)](AddItemToList(_0xf7ff69,_0x492e42,!![]))[_0x45ddf5(0x23b)](function(_0x361852){});}catch(_0x282bc2){console[_0x45ddf5(0x26e)](_0x282bc2[_0x45ddf5(0x1d3)]);}}function onQuerySucceeded(){var _0x4096f2=a0_0xa52a9c;console[_0x4096f2(0x26e)](_0x4096f2(0x236));}function onQueryFailed(_0x4ac480,_0x4161bd){var _0x5ab242=a0_0xa52a9c;alert(_0x5ab242(0x24b)+_0x4161bd[_0x5ab242(0x20f)]());}function GetUserFullName(_0x122c28){var _0x1ebd06=a0_0xa52a9c,_0x3d2605='',_0x442652=_0x1ebd06(0x1e5),_0x203f02=_spPageContextInfo['siteAbsoluteUrl'],_0x454484=_0x442652+_0x122c28;return $[_0x1ebd06(0x216)]({'url':_0x203f02+_0x1ebd06(0x275)+encodeURIComponent(_0x454484)+'\x27','method':'GET','headers':{'Accept':_0x1ebd06(0x279)},'async':![],'success':function(_0x603a8){var _0x1f5efb=_0x1ebd06;_0x3d2605=_0x603a8['d'][_0x1f5efb(0x243)];},'error':function(_0x242779){var _0x209c22=_0x1ebd06;console[_0x209c22(0x26e)](JSON['stringify'](_0x242779));}}),_0x3d2605;}function GetAllItemsToDelete(){var _0x134986=a0_0xa52a9c;$[_0x134986(0x216)]({'url':_spPageContextInfo[_0x134986(0x21e)]+_0x134986(0x1f4),'type':_0x134986(0x27d),'headers':{'accept':'application/json;odata=verbose'},'success':function(_0x2faa68){var _0x48bf46=_0x134986,_0xbdf78c=_0x2faa68['d']['results'];for(var _0x439316=0x0;_0x439316<_0xbdf78c[_0x48bf46(0x249)];_0x439316++){var _0x3df2e5=_spPageContextInfo[_0x48bf46(0x21e)]+_0x48bf46(0x1f2)+_0xbdf78c[_0x439316]['ID']+')';deleteItem(_0x3df2e5);}},'error':function(_0x4ae74c){var _0x48822e=_0x134986;console[_0x48822e(0x26e)](JSON[_0x48822e(0x293)](_0x4ae74c));}});}function deleteItem(_0x3a9722){var _0x306c31=a0_0xa52a9c;$['ajax']({'url':_0x3a9722,'type':'DELETE','headers':{'accept':_0x306c31(0x27c),'X-RequestDigest':$(_0x306c31(0x1e0))[_0x306c31(0x1d9)](),'If-Match':'*'},'success':function(_0x341d35){var _0x81f3ca=_0x306c31;console['log'](_0x81f3ca(0x1d2));},'error':function(_0x382dcb){var _0x2cf96f=_0x306c31;console[_0x2cf96f(0x26e)](JSON[_0x2cf96f(0x293)](_0x382dcb));}});}function GetLicencedUsersCount(){var _0x1693f9=a0_0xa52a9c,_0x239ba9=0x0,_0x1b3286=_0x1693f9(0x214),_0x1328c0=_spPageContextInfo[_0x1693f9(0x21e)]+_0x1693f9(0x266)+_0x1b3286;return $['ajax']({'url':_0x1328c0,'data':{'format':'json'},'type':'GET','dataType':_0x1693f9(0x1d7),'async':![],'success':function(_0x485093){var _0x44cbb7=_0x1693f9,_0x313e61=_0x485093,_0xf5c0a6=[];for(var _0x34ea40=0x0;_0x34ea40<_0x313e61['value'][_0x44cbb7(0x249)];_0x34ea40++){if(_0x313e61[_0x44cbb7(0x271)][_0x34ea40][_0x44cbb7(0x28d)]!=undefined){var _0x15150d=_0x313e61[_0x44cbb7(0x271)][_0x34ea40][_0x44cbb7(0x28d)][_0x44cbb7(0x23e)];_0x15150d!=null&&(_0xf5c0a6[_0x44cbb7(0x254)](_0x15150d[_0x44cbb7(0x25e)]())==-0x1&&_0xf5c0a6['push'](_0x15150d[_0x44cbb7(0x25e)]()));}}_0x239ba9=_0xf5c0a6['length'];}}),_0x239ba9;}