var a0_0x2c903c=a0_0x428f;(function(_0xb22947,_0x137eac){var _0x560eb8=a0_0x428f,_0x4894a8=_0xb22947();while(!![]){try{var _0x1cbd48=-parseInt(_0x560eb8(0x1b1))/0x1*(-parseInt(_0x560eb8(0x1d9))/0x2)+-parseInt(_0x560eb8(0x1ec))/0x3*(-parseInt(_0x560eb8(0x195))/0x4)+-parseInt(_0x560eb8(0x192))/0x5+-parseInt(_0x560eb8(0x173))/0x6+-parseInt(_0x560eb8(0x1f5))/0x7*(-parseInt(_0x560eb8(0x184))/0x8)+-parseInt(_0x560eb8(0x1fa))/0x9+parseInt(_0x560eb8(0x182))/0xa*(-parseInt(_0x560eb8(0x14a))/0xb);if(_0x1cbd48===_0x137eac)break;else _0x4894a8['push'](_0x4894a8['shift']());}catch(_0x201662){_0x4894a8['push'](_0x4894a8['shift']());}}}(a0_0x427d,0x8efae));var currentCompanyid='';$(document)[a0_0x2c903c(0x161)](function(){var _0x32c3f7=a0_0x2c903c;UserAuthorization(),WaitMessage(),currentCompanyid=titanForWork[_0x32c3f7(0x1cf)](_0x32c3f7(0x1d3)),currentCompanyid!=null&&currentCompanyid!=''&&(currentCompanyid[_0x32c3f7(0x1fe)]('#')!=-0x1&&(currentCompanyid=currentCompanyid[_0x32c3f7(0x1fd)]('#')[0x0]),currentCompanyid=currentCompanyid),$(_0x32c3f7(0x180))[_0x32c3f7(0x163)](_0x32c3f7(0x17b),_0x32c3f7(0x1a2)+currentCompanyid),CheckUserPermission(currentCompanyid),GetTempEmployeeList(currentCompanyid),keyWordSearch(),GetCompanies(),GetDepartment(0x0),GetOfficeLocation('No'),FilterByDropDownList(),CopyEmployeeToAnotherCompany(),$(_0x32c3f7(0x1dd))['change'](function(){var _0x38ac22=_0x32c3f7;GetDepartment($(this)[_0x38ac22(0x1e0)]()),GetOfficeLocation($(this)[_0x38ac22(0x1e0)]());});});function UserAuthorization(){var _0x342e89=a0_0x2c903c,_0x20871d=titanForWork[_0x342e89(0x1cf)]('CompanyId');titanForWork[_0x342e89(0x15b)](_0x342e89(0x150),_0x20871d)['done'](function(_0x2a569c,_0x1e3ba9){var _0x277bf1=_0x342e89;if(_0x2a569c[_0x277bf1(0x1a8)]>0x0){if(_0x2a569c[0x0][_0x277bf1(0x1da)]==_0x277bf1(0x1da)||_0x2a569c[0x0][_0x277bf1(0x1af)]=='TechAdmin'){}else alert(_0x1e3ba9),window[_0x277bf1(0x1ca)][_0x277bf1(0x17b)]=_spPageContextInfo[_0x277bf1(0x1aa)];}});}function keyWordSearch(){var _0x50a8b9=a0_0x2c903c;$(_0x50a8b9(0x186))['on'](_0x50a8b9(0x14d),function(){var _0x544ccf=_0x50a8b9,_0x4f11ca=$(this)[_0x544ccf(0x1e0)](),_0x2e2ed9=new RegExp(_0x4f11ca,'i');$('#tableTempEmp\x20tbody')[_0x544ccf(0x18d)]('tr')['each'](function(){var _0x54d3dd=_0x544ccf;!($(this)['find']('td')[_0x54d3dd(0x1f2)]()[_0x54d3dd(0x181)](_0x2e2ed9)>=0x0)&&$(this)[_0x54d3dd(0x1e9)](_0x54d3dd(0x17f))[_0x54d3dd(0x1a0)](),$(this)[_0x54d3dd(0x18d)]('td')[_0x54d3dd(0x1f2)]()[_0x54d3dd(0x181)](_0x2e2ed9)>=0x0&&$(this)[_0x54d3dd(0x15e)]();});});}function FilterByDropDownList(){var _0x5c8518=a0_0x2c903c;$(_0x5c8518(0x1b2))['change'](function(){var _0x5738c9=_0x5c8518;$(_0x5738c9(0x1b2))[_0x5738c9(0x1e0)]()!='0'?($(_0x5738c9(0x15f))[_0x5738c9(0x1e0)](0x4),$(_0x5738c9(0x19a))[_0x5738c9(0x1e0)]($(this)['val']()),$('#ddlTempManagerFilter')[_0x5738c9(0x1e0)](0x0)):($(_0x5738c9(0x19a))['val'](''),$('#columns')[_0x5738c9(0x1e0)](-0x1)),sorter[_0x5738c9(0x181)]('query');}),$(_0x5c8518(0x16f))['change'](function(){var _0x2d19a8=_0x5c8518;$(_0x2d19a8(0x16f))['val']()!='0'?($(_0x2d19a8(0x15f))[_0x2d19a8(0x1e0)](0x7),$('#query')[_0x2d19a8(0x1e0)]($(this)[_0x2d19a8(0x1e0)]()),$('#ddlTempDepartmentFilter')[_0x2d19a8(0x1e0)](0x0)):($(_0x2d19a8(0x19a))[_0x2d19a8(0x1e0)](''),$(_0x2d19a8(0x15f))[_0x2d19a8(0x1e0)](-0x1)),sorter[_0x2d19a8(0x181)]('query');}),$(_0x5c8518(0x19a))['keyup'](function(){var _0x2cba3e=_0x5c8518;$(_0x2cba3e(0x15f))[_0x2cba3e(0x1e0)](-0x1),$(_0x2cba3e(0x1b2))[_0x2cba3e(0x1e0)](0x0),$(_0x2cba3e(0x16f))[_0x2cba3e(0x1e0)](0x0);});}function EmployeeCheckListValidation(_0x2cd516,_0x1a6dc7){var _0x4eede0=a0_0x2c903c,_0x5e20a8=![];try{var _0x35229d=_spPageContextInfo[_0x4eede0(0x1aa)]+_0x4eede0(0x1f6)+_0x2cd516+_0x4eede0(0x200)+_0x1a6dc7+'\x27';$[_0x4eede0(0x1eb)]({'url':_0x35229d,'headers':{'Accept':_0x4eede0(0x188)},'async':![],'success':function(_0x3740af){var _0x116ede=_0x4eede0,_0x42d32c=_0x3740af['d'][_0x116ede(0x1a1)];_0x42d32c[_0x116ede(0x1a8)]>0x0&&(_0x5e20a8=!![]);},'eror':function(_0x13894c){var _0x30c8c1=_0x4eede0;CloseWaitDialog(),console[_0x30c8c1(0x1cd)](_0x30c8c1(0x1c6));}});}catch(_0x41e979){alert(_0x4eede0(0x1e7));}return _0x5e20a8;}function CopyEmployeeToAnotherCompany(){var _0x587d5d=a0_0x2c903c;$('#btnCopy')[_0x587d5d(0x196)](function(){var _0x48a739=_0x587d5d;parseInt($(_0x48a739(0x1dd))[_0x48a739(0x1e0)]())==0x0||parseInt($(_0x48a739(0x1f1))['val']())==0x0||parseInt($(_0x48a739(0x1d1))[_0x48a739(0x1e0)]())==0x0?alert('Please\x20select\x20company,department\x20and\x20office\x20location.'):ValidationCheckBox()==!![]?(WaitMessage(),$[_0x48a739(0x154)](AddEmployeeDataAllocated())[_0x48a739(0x1d5)](function(_0xf6d703){var _0x219740=_0x48a739;GetTempEmployeeList(currentCompanyid),GetCompanies(),GetDepartment(0x0),GetOfficeLocation('No'),$(_0x219740(0x19a))[_0x219740(0x1e0)]('');})):alert(_0x48a739(0x1c3));});}function GetDateStandardFormat(_0x3afdf2){var _0x5424bd=a0_0x2c903c,_0x18ef42=ConvertDateFormatToddMMyyyy(_0x3afdf2),_0x241a2b=new Date(_0x18ef42),_0x579f72=0x3c*0x3c*0x18*0x3e8,_0xb99aa=new Date(_0x241a2b['getTime']()),_0x55dcbe=_0xb99aa[_0x5424bd(0x174)]();return _0x55dcbe;}function ConvertDateFormatToddMMyyyy(_0x233023){var _0x1402af=a0_0x2c903c,_0x3c46e3=stringToDate(_0x233023,_0x1402af(0x16b),'/');return _0x3c46e3;}function stringToDate(_0x2ed0fb,_0x5d4150,_0x245984){var _0x6f5750=a0_0x2c903c,_0x638e7a=_0x5d4150['toLowerCase'](),_0xc7e163=_0x638e7a['split'](_0x245984),_0x29ee49=_0x2ed0fb[_0x6f5750(0x1fd)](_0x245984),_0x5553aa=_0xc7e163[_0x6f5750(0x1fe)]('mm'),_0x26abb9=_0xc7e163[_0x6f5750(0x1fe)]('dd'),_0x31e7d4=_0xc7e163[_0x6f5750(0x1fe)](_0x6f5750(0x17e)),_0x1d2647=parseInt(_0x29ee49[_0x5553aa]);_0x1d2647-=0x1;var _0x26cd7a=new Date(_0x29ee49[_0x31e7d4],_0x1d2647,_0x29ee49[_0x26abb9]);return _0x26cd7a;}function AddEmployeeDataAllocated(){var _0x438416=a0_0x2c903c,_0x15ca71=$(_0x438416(0x1b9))[_0x438416(0x1a8)];return $(_0x438416(0x1b9))[_0x438416(0x198)](function(_0x15d360){var _0x343781=_0x438416,_0x3dd985=$(this)['is'](':visible');if(_0x3dd985==!![]){var _0x5c10cc=$(this)[_0x343781(0x18d)](_0x343781(0x1fb))[_0x343781(0x163)](_0x343781(0x146));if(_0x5c10cc==!![]){var _0x31c4ff=$(this)[_0x343781(0x18d)]('td')[0x1][_0x343781(0x1b5)],_0x171c4b=$(this)[_0x343781(0x18d)]('td')[0x2][_0x343781(0x1b5)],_0xbd127b=$(this)[_0x343781(0x18d)]('td')[0x3][_0x343781(0x1b5)],_0x47a0c7='',_0x1e1043=$(this)[_0x343781(0x18d)]('td')[0x6]['innerText'],_0xaef300=$(this)[_0x343781(0x18d)]('td')[0x7][_0x343781(0x1b5)],_0x5efa77=$(this)[_0x343781(0x18d)]('td')[0x8][_0x343781(0x1b5)],_0x4dd31b=$(this)[_0x343781(0x18d)]('td')[0x9][_0x343781(0x1b5)],_0x1aad1a=$(this)[_0x343781(0x18d)]('td')[0xa][_0x343781(0x1b5)],_0xaa547d=$(this)[_0x343781(0x18d)]('td')[0xb][_0x343781(0x1b5)],_0x361894='';_0x4dd31b!=null&&_0x4dd31b!=''&&(_0x361894=GetDateStandardFormat(_0x4dd31b));var _0x55ffa4='';_0x1aad1a!=null&&_0x1aad1a!=''&&(_0x55ffa4=GetDateStandardFormat(_0x1aad1a));var _0x41e0a9='';_0xaa547d!=null&&_0xaa547d!=''&&(_0x41e0a9=GetDateStandardFormat(_0xaa547d));(_0xbd127b==null||_0xbd127b=='')&&(_0xbd127b=_0x171c4b);var _0x4311ec=parseInt($('#ddlTempCompany')[_0x343781(0x1e0)]()),_0x14e4a3=parseInt($(_0x343781(0x1f1))[_0x343781(0x1e0)]());EmployeeCheckListValidation(_0x171c4b,_0x4311ec)==![]?AddNewEmployeeAllocated(_0x343781(0x1f4),_0x31c4ff,_0xbd127b,_0x171c4b,_0x1e1043,_0xaef300,_0xaef300,_0x5efa77,_0x361894,_0x55ffa4,_0x41e0a9):alert(_0x343781(0x204)+_0x171c4b);}}}),!![];}function AddNewEmployeeAllocated(_0xea6874,_0x3b6bed,_0x3823c1,_0x5a58f1,_0x3ddf8c,_0x21207c,_0x4fac50,_0x32c84d,_0x387df7,_0x53ddf4,_0xf1408f){var _0x3f99be=a0_0x2c903c;try{var _0x5ec49c=GetUserId(_0x5a58f1);if(_0x5ec49c==''||_0x5ec49c==null)alert(_0x3f99be(0x1b0)+_0x5a58f1+_0x3f99be(0x202));else{var _0x3441af=parseInt($('#ddlTempCompany')['val']()),_0x5f2345=parseInt($('#ddlTempDepartment')[_0x3f99be(0x1e0)]()),_0x234eb9=parseInt($(_0x3f99be(0x1d1))[_0x3f99be(0x1e0)]()),_0x4453fa,_0x1fdae5=GetItemTypeForListName(_0xea6874);_0x4453fa={'__metadata':{'type':_0x1fdae5},'CompanyId':_0x3441af,'DepartmentId':_0x5f2345,'FullName':_0x3b6bed,'ParentId':'-1','Email':_0x3823c1,'LogonNameId':_0x5ec49c,'Manager':'','OfficeLocationId':_0x234eb9,'MobileNumber':_0x32c84d,'DateOfBirth':_0x387df7,'DateOfAnniversary':_0x53ddf4,'JoiningDate':_0xf1408f,'Designation':_0x3ddf8c,'PrimaryCompany':'','Status':_0x3f99be(0x153)},(_0x234eb9==''||_0x234eb9==null||_0x234eb9==0x0)&&delete _0x4453fa[_0x3f99be(0x1bf)],(_0x5ec49c==''||_0x5ec49c==null)&&delete _0x4453fa[_0x3f99be(0x1d3)],(_0x387df7==null||_0x387df7=='')&&delete _0x4453fa[_0x3f99be(0x17d)],(_0x53ddf4==null||_0x53ddf4=='')&&delete _0x4453fa[_0x3f99be(0x1e3)],(_0xf1408f==null||_0xf1408f=='')&&delete _0x4453fa['JoiningDate'],AddItemToList(_0xea6874,_0x4453fa);}}catch(_0xf77772){console[_0x3f99be(0x1cd)](_0xf77772[_0x3f99be(0x1bb)]);}}function a0_0x428f(_0x537302,_0x496d21){var _0x427d5a=a0_0x427d();return a0_0x428f=function(_0x428f77,_0x171be7){_0x428f77=_0x428f77-0x13f;var _0x3fa2d2=_0x427d5a[_0x428f77];return _0x3fa2d2;},a0_0x428f(_0x537302,_0x496d21);}function AddItemToList(_0x16cc54,_0x502eb9){var _0x1a542e=a0_0x2c903c,_0x5a5013=$[_0x1a542e(0x16d)]();return $['ajax']({'url':_spPageContextInfo[_0x1a542e(0x1aa)]+_0x1a542e(0x1c8)+_0x16cc54+_0x1a542e(0x1ed),'type':_0x1a542e(0x14c),'async':![],'headers':{'accept':_0x1a542e(0x188),'X-RequestDigest':$(_0x1a542e(0x178))['val'](),'content-Type':_0x1a542e(0x188)},'data':JSON[_0x1a542e(0x1c5)](_0x502eb9),'success':function(_0x19e563){var _0x29b566=_0x1a542e;_0x5a5013[_0x29b566(0x1d7)](_0x19e563);},'error':function(_0x37a6c5){alert(JSON['stringify'](_0x37a6c5)),_0x5a5013['reject'](_0x37a6c5);}}),_0x5a5013[_0x1a542e(0x1dc)]();}function GetUserId(_0x12bde2){var _0x5b3d75=a0_0x2c903c,_0x14e549='',_0x46a791=_0x5b3d75(0x148),_0x41fdec=_spPageContextInfo['siteAbsoluteUrl'],_0x265265=_0x46a791+_0x12bde2;return $['ajax']({'url':_0x41fdec+_0x5b3d75(0x145)+encodeURIComponent(_0x265265)+'\x27','method':_0x5b3d75(0x1b8),'headers':{'Accept':_0x5b3d75(0x17c)},'async':![],'success':function(_0x4366b0){_0x14e549=_0x4366b0['d']['Id'];},'error':function(_0x28124d){var _0x2ecb69=_0x5b3d75;console[_0x2ecb69(0x1cd)](JSON[_0x2ecb69(0x1c5)](_0x28124d));}}),_0x14e549;}function GetCompanies(){var _0x360287=a0_0x2c903c;$(_0x360287(0x1dd))['empty']()[_0x360287(0x1ad)](_0x360287(0x1be));var _0x558b8a=_spPageContextInfo[_0x360287(0x1aa)]+_0x360287(0x160);$[_0x360287(0x1eb)]({'url':_0x558b8a,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x4a78f9){var _0x28ab2d=_0x360287,_0x2dc836=_0x4a78f9['d'][_0x28ab2d(0x1a1)];for(var _0x1d42b4=0x0;_0x1d42b4<_0x2dc836['length'];_0x1d42b4++){$('#ddlTempCompany')[_0x28ab2d(0x1ad)]($('<option></option>')[_0x28ab2d(0x197)](_0x28ab2d(0x1ac),_0x4a78f9['d'][_0x28ab2d(0x1a1)][_0x1d42b4]['ID'])['text'](_0x4a78f9['d'][_0x28ab2d(0x1a1)][_0x1d42b4]['CompanyName']));}},'eror':function(_0x379eaa){var _0x4ed47d=_0x360287;console[_0x4ed47d(0x1cd)](_0x4ed47d(0x1c6));}});}function GetOfficeLocation(_0x586490){var _0x5843f8=a0_0x2c903c;$('#ddlTempOfficeLocation')[_0x5843f8(0x1d0)]()[_0x5843f8(0x1ad)](_0x5843f8(0x1ae));var _0x33ba4e=_spPageContextInfo[_0x5843f8(0x1aa)]+'/_api/web/lists/GetByTitle(\x27OfficeLocation\x27)/items?$select=ID,OfficeName,CompanyID/ID&$expand=CompanyID&$filter=OfficeLocationId\x20eq\x20\x270\x27\x20and\x20CompanyID/ID\x20eq\x20\x27'+_0x586490+'\x27';$[_0x5843f8(0x1eb)]({'url':_0x33ba4e,'headers':{'Accept':_0x5843f8(0x188)},'async':![],'success':function(_0x40e1fe){var _0x22efaf=_0x5843f8,_0x17890b=_0x40e1fe['d'][_0x22efaf(0x1a1)];for(var _0x5eb7bc=0x0;_0x5eb7bc<_0x17890b[_0x22efaf(0x1a8)];_0x5eb7bc++){$('#ddlTempOfficeLocation')['append']($('<option></option>')[_0x22efaf(0x197)](_0x22efaf(0x1ac),_0x40e1fe['d']['results'][_0x5eb7bc]['ID'])[_0x22efaf(0x1f2)](_0x40e1fe['d'][_0x22efaf(0x1a1)][_0x5eb7bc][_0x22efaf(0x19b)]));}},'eror':function(_0x17ab5d){var _0x51313c=_0x5843f8;console['log'](_0x51313c(0x1c6));}});}function GetDepartment(_0x22df3c){var _0x1405a4=a0_0x2c903c;$(_0x1405a4(0x1f1))[_0x1405a4(0x1d0)]()[_0x1405a4(0x1ad)](_0x1405a4(0x172));var _0x5cb2e2=_spPageContextInfo[_0x1405a4(0x1aa)]+_0x1405a4(0x18e)+_0x22df3c+'\x27';$[_0x1405a4(0x1eb)]({'url':_0x5cb2e2,'headers':{'Accept':_0x1405a4(0x188)},'async':![],'success':function(_0x1a59f7){var _0x1b663b=_0x1405a4,_0x5ac52b=_0x1a59f7['d'][_0x1b663b(0x1a1)];for(var _0x41b6d6=0x0;_0x41b6d6<_0x5ac52b[_0x1b663b(0x1a8)];_0x41b6d6++){$('#ddlTempDepartment')[_0x1b663b(0x1ad)]($(_0x1b663b(0x1df))['attr']('value',_0x1a59f7['d'][_0x1b663b(0x1a1)][_0x41b6d6]['ID'])['text'](_0x1a59f7['d']['results'][_0x41b6d6]['DepartmentName']));}},'eror':function(_0x492301){var _0x3150aa=_0x1405a4;console['log'](_0x3150aa(0x1c6));}});}function GetTempEmployeeList(_0x394b3c){var _0x205251=a0_0x2c903c,_0xf20501=new Array(),_0x327d04=new Array();$(_0x205251(0x1ab))[_0x205251(0x1d0)]()[_0x205251(0x1ad)]('<option\x20value=\x220\x22>-Select\x20Manager-</option>'),$(_0x205251(0x1ab))['append'](_0x205251(0x164)),$('#ddlTempDepartmentFilter')['empty']()[_0x205251(0x1ad)](_0x205251(0x166)),$(_0x205251(0x16f))[_0x205251(0x1d0)]()[_0x205251(0x1ad)](_0x205251(0x183));var _0x4eb528=_spPageContextInfo['webAbsoluteUrl']+_0x205251(0x155)+_0x394b3c+'\x27';$[_0x205251(0x1eb)]({'url':_0x4eb528,'headers':{'Accept':_0x205251(0x188)},'async':!![],'success':function(_0x5cbfe9){var _0x1d0ff9=_0x205251,_0x51d27d=_0x5cbfe9['d']['results'],_0x54389f='<div\x20id=\x27mainTablearea\x27\x20class=\x27table-responsive\x27><table\x20cellpadding=\x270\x27\x20style=\x27\x27\x20cellspacing=\x270\x27\x20border=\x271\x27\x20id=\x27tableTempEmp\x27\x20class=\x27tinytable\x20employee-table-responsiv\x27></div><thead\x20class=\x27panel-heading\x27><tr><th\x20class=\x27nosort\x27\x20style=\x27width:40px;text-align:center;\x27><h6></h6></th><th><h6\x20data-localize=\x27Name\x27></h6></th><th><h6\x20data-localize=\x27Login\x27></h6></th><th><h6\x20data-localize=\x27Email\x27></h6></th><th><h6\x20data-localize=\x27Department\x27></h6></th><th><h6\x20data-localize=\x27OfficeLocation\x27></h6></th><th><h6\x20data-localize=\x27Designation\x27></h6></th><th><h6\x20data-localize=\x27Manager\x27></h6></th><th><h6\x20data-localize=\x27MobileNo\x27></h6></th><th><h6\x20data-localize=\x27DOB\x27></h6></th><th><h6\x20data-localize=\x27Anniversary\x27></h6></th><th><h6\x20data-localize=\x27DateOfJoining\x27></h6></th><th\x20class=\x27nosort\x27><h6\x20data-localize=\x27AllocatedCompanies\x27></h6></th></tr></thead><tbody\x20class=\x27panel\x27>',_0x28c84f='';for(var _0x2ed0bb=0x0;_0x2ed0bb<_0x51d27d['length'];_0x2ed0bb++){var _0x310ef0=_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x149)][_0x1d0ff9(0x15a)],_0x3048fa=GetUserFullName(_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x149)][_0x1d0ff9(0x15a)]);_0x3048fa==null||_0x3048fa==''?_0x3048fa='':_0xf20501[_0x1d0ff9(0x1fe)](_0x3048fa[_0x1d0ff9(0x18c)]())==-0x1&&($(_0x1d0ff9(0x1ab))[_0x1d0ff9(0x1ad)]($(_0x1d0ff9(0x1df))['attr'](_0x1d0ff9(0x1ac),_0x51d27d[_0x2ed0bb]['ID'])[_0x1d0ff9(0x1f2)](_0x3048fa)),$(_0x1d0ff9(0x16f))[_0x1d0ff9(0x1ad)]($(_0x1d0ff9(0x1df))['attr'](_0x1d0ff9(0x1ac),_0x3048fa)[_0x1d0ff9(0x1f2)](_0x3048fa)),_0xf20501[_0x1d0ff9(0x16a)](_0x3048fa[_0x1d0ff9(0x18c)]()));var _0x367643=_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x149)][_0x1d0ff9(0x15a)];(_0x367643==null||_0x367643=='')&&(_0x367643='');var _0x2cd3b1=_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x170)];(_0x2cd3b1==null||_0x2cd3b1=='')&&(_0x2cd3b1='');var _0x57dcda=_0x51d27d[_0x2ed0bb]['Department'][_0x1d0ff9(0x1c0)];if(_0x57dcda==null||_0x57dcda=='')_0x57dcda='';else{var _0x42065f=_0x57dcda;_0x327d04[_0x1d0ff9(0x1fe)](_0x42065f[_0x1d0ff9(0x18c)]())==-0x1&&($(_0x1d0ff9(0x1b2))[_0x1d0ff9(0x1ad)]($('<option></option>')[_0x1d0ff9(0x197)](_0x1d0ff9(0x1ac),_0x57dcda)[_0x1d0ff9(0x1f2)](_0x57dcda)),_0x327d04[_0x1d0ff9(0x16a)](_0x42065f[_0x1d0ff9(0x18c)]()));}var _0x40282e=_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x169)];(_0x40282e==null||_0x40282e=='')&&(_0x40282e='');var _0x1206ab=_0x51d27d[_0x2ed0bb]['Company']['CompanyName'];(_0x1206ab==null||_0x1206ab=='')&&(_0x1206ab='');var _0x3b2869=_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x1a4)];(_0x3b2869==null||_0x3b2869=='')&&(_0x3b2869='');var _0x1b655b=_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x157)];(_0x1b655b==null||_0x1b655b=='')&&(_0x1b655b='');var _0x33a7a7=getFormattedDate(_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x17d)]);_0x33a7a7==_0x1d0ff9(0x159)?_0x33a7a7='':_0x33a7a7=titanForWork[_0x1d0ff9(0x1c1)](new Date(_0x51d27d[_0x2ed0bb]['DateOfBirth']));var _0x405af3=getFormattedDate(_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x19c)]);_0x405af3==_0x1d0ff9(0x159)?_0x405af3='':_0x405af3=titanForWork[_0x1d0ff9(0x1c1)](new Date(_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x19c)]));var _0x24fe92=getFormattedDate(_0x51d27d[_0x2ed0bb]['DateOfAnniversary']);_0x24fe92==_0x1d0ff9(0x159)?_0x24fe92='':_0x24fe92=titanForWork['ShowCommonStandardDateFormat'](new Date(_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x1e3)]));var _0x2d4125=_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x1f0)][_0x1d0ff9(0x19b)];(_0x2d4125==null||_0x2d4125=='')&&(_0x2d4125='');var _0x6f1408=_0x1d0ff9(0x1f9);_0x51d27d[_0x2ed0bb][_0x1d0ff9(0x1c4)]!='Active'&&(_0x6f1408=_0x1d0ff9(0x18b));var _0x28d8c5=_0x1d0ff9(0x1bd)+_0x367643+'\x27)',_0xa3ddf0=_0x1d0ff9(0x17a)+currentCompanyid+_0x1d0ff9(0x168)+_0x51d27d[_0x2ed0bb]['ID']+_0x1d0ff9(0x1cc)+currentCompanyid;_0x28c84f=_0x28c84f+_0x1d0ff9(0x13f)+_0x6f1408+_0x1d0ff9(0x201)+_0x51d27d[_0x2ed0bb]['ID']+'></td><td><a\x20href=\x27'+_0xa3ddf0+'\x27>'+_0x3048fa+_0x1d0ff9(0x1f8)+_0x367643+_0x1d0ff9(0x143)+_0x2cd3b1+_0x1d0ff9(0x143)+_0x57dcda+_0x1d0ff9(0x143)+_0x2d4125+_0x1d0ff9(0x143)+_0x40282e+_0x1d0ff9(0x143)+_0x3b2869+_0x1d0ff9(0x143)+_0x1b655b+'</td><td>'+_0x33a7a7+_0x1d0ff9(0x143)+_0x24fe92+_0x1d0ff9(0x143)+_0x405af3+'</td><td><a\x20href='+_0x28d8c5+'>Companies</a></td></tr>';}var _0xe8d9b9=_0x54389f+_0x28c84f+'</tbody></table>',_0x54d3e8=$('#mainDivArea');_0x54d3e8[_0x1d0ff9(0x152)](''),_0x51d27d[_0x1d0ff9(0x1a8)]==0x0&&(_0xe8d9b9=_0xe8d9b9+_0x1d0ff9(0x1ce)),_0x54d3e8['append'](_0xe8d9b9),LableLoad(),GenerateTable(),$(_0x1d0ff9(0x1ea))[_0x1d0ff9(0x163)](_0x1d0ff9(0x1b3),0x1),$(_0x1d0ff9(0x190))[_0x1d0ff9(0x194)](),CloseWaitDialog();},'eror':function(_0x708842){var _0x334afa=_0x205251;CloseWaitDialog(),console['log'](_0x334afa(0x1c6));}});}var sorter;function GenerateTable(){var _0xbb9db1=a0_0x2c903c;sorter=new TINY[(_0xbb9db1(0x16c))][(_0xbb9db1(0x185))]('sorter',_0xbb9db1(0x14b),{'headclass':_0xbb9db1(0x1e5),'ascclass':'asc','descclass':'desc','evenclass':_0xbb9db1(0x142),'oddclass':_0xbb9db1(0x19e),'evenselclass':_0xbb9db1(0x156),'oddselclass':'oddselected','paginate':!![],'size':0xa,'colddid':_0xbb9db1(0x1cb),'currentid':_0xbb9db1(0x1e2),'totalid':_0xbb9db1(0x199),'startingrecid':'startrecord','endingrecid':'endrecord','totalrecid':_0xbb9db1(0x18f),'hoverid':_0xbb9db1(0x179),'pageddid':_0xbb9db1(0x1a9),'navid':'tablenav','sortdir':0x1,'init':!![]});}function GetUserFullName(_0x3bb35f){var _0x263353=a0_0x2c903c,_0x4356f2='',_0x1d83ff=_0x263353(0x148),_0x4d3fd9=_spPageContextInfo[_0x263353(0x1d2)],_0x176571=_0x1d83ff+_0x3bb35f;return $['ajax']({'url':_0x4d3fd9+'/_api/web/siteusers(@v)?@v=\x27'+encodeURIComponent(_0x176571)+'\x27','method':'GET','headers':{'Accept':'application/json;\x20odata=verbose'},'async':![],'success':function(_0x537c45){_0x4356f2=_0x537c45['d']['Title'];},'error':function(_0x734c00){var _0x516f75=_0x263353;console[_0x516f75(0x1cd)](JSON['stringify'](_0x734c00));}}),_0x4356f2;}function getFormattedDate(_0x536689){var _0x1b479e=a0_0x2c903c,_0x266793=new Date(_0x536689),_0x444699=_0x266793['getFullYear'](),_0xd6a389=(0x1+_0x266793[_0x1b479e(0x19f)]())[_0x1b479e(0x140)]();_0xd6a389=_0xd6a389[_0x1b479e(0x1a8)]>0x1?_0xd6a389:'0'+_0xd6a389;var _0x9bdf8f=_0x266793['getDate']()[_0x1b479e(0x140)]();return _0x9bdf8f=_0x9bdf8f[_0x1b479e(0x1a8)]>0x1?_0x9bdf8f:'0'+_0x9bdf8f,_0x9bdf8f+'/'+_0xd6a389+'/'+_0x444699;}$(document)[a0_0x2c903c(0x161)](function(){var _0x18a159=a0_0x2c903c;$(_0x18a159(0x176))['click'](function(){var _0x1504e5=_0x18a159,_0x188e3b=$(_0x1504e5(0x1dd))[_0x1504e5(0x1e0)]();_0x188e3b!='0'?ValidationCheckBox()==!![]?(WaitMessage(),$[_0x1504e5(0x154)](getUserOutputCompany())[_0x1504e5(0x1d5)](function(_0x28cd18){GetTempEmployeeList(currentCompanyid);})):alert(_0x1504e5(0x1c3)):alert(_0x1504e5(0x189));}),$(_0x18a159(0x1e4))[_0x18a159(0x196)](function(){var _0xf1fd07=_0x18a159,_0x29de8e=$(_0xf1fd07(0x1f1))['val']();_0x29de8e!='0'?ValidationCheckBox()==!![]?(WaitMessage(),$['when'](getUserOutputDepartment())[_0xf1fd07(0x1d5)](function(_0x153800){GetTempEmployeeList(currentCompanyid);})):alert(_0xf1fd07(0x1c3)):alert(_0xf1fd07(0x151));}),$(_0x18a159(0x18a))['click'](function(){var _0x331b6e=_0x18a159;validationDropDownSelecttion()==0x0?ValidationCheckBox()==!![]?(WaitMessage(),$['when'](getUserOutputManager(_0x331b6e(0x1ba)))[_0x331b6e(0x1d5)](function(_0x3b9918){var _0x324e3f=_0x331b6e;GetTempEmployeeList(currentCompanyid),GetCompanies(),GetDepartment(0x0),GetOfficeLocation('No'),$(_0x324e3f(0x19a))[_0x324e3f(0x1e0)]('');})):alert('Please\x20select\x20at\x20least\x20one\x20record\x20from\x20list.'):validationDropDownSelecttion()==0x1?alert(_0x331b6e(0x1bc)):alert(_0x331b6e(0x177));}),$('#btnUpdateManager')[_0x18a159(0x196)](function(){var _0x2faafa=_0x18a159,_0x1c24f1=$(_0x2faafa(0x1ab))[_0x2faafa(0x1e0)]();_0x1c24f1!='0'?ValidationCheckBox()==!![]?(WaitMessage(),$[_0x2faafa(0x154)](getUserOutputManager(_0x2faafa(0x1ef)))[_0x2faafa(0x1d5)](function(_0x5944c6){var _0x34ad3b=_0x2faafa;GetTempEmployeeList(currentCompanyid),GetCompanies(),GetDepartment(0x0),GetOfficeLocation('No'),$(_0x34ad3b(0x19a))[_0x34ad3b(0x1e0)]('');})):alert(_0x2faafa(0x1c3)):alert(_0x2faafa(0x1d6));});});function validationDropDownSelecttion(){var _0x259e4c=a0_0x2c903c,_0x39f838=0x0,_0x3d2f1d=$(_0x259e4c(0x1f1))[_0x259e4c(0x1e0)](),_0x2ee175=$(_0x259e4c(0x1dd))['val'](),_0xa9e535=$('#ddlTempManager')[_0x259e4c(0x1e0)](),_0x4057b8=$(_0x259e4c(0x1d1))[_0x259e4c(0x1e0)]();if(_0x2ee175=='0'&&_0x3d2f1d=='0'&&_0xa9e535=='0'&&_0x4057b8=='0')_0x39f838=0x1;else _0x2ee175!='0'&&_0x3d2f1d=='0'&&(_0x39f838=0x2);return _0x39f838;}function getUserOutputCompany(){var _0x29aca7=a0_0x2c903c,_0x5b3ced=$('#ddlTempCompany')[_0x29aca7(0x1e0)]();$(_0x29aca7(0x1b9))[_0x29aca7(0x198)](function(_0x20960f){var _0x57362a=_0x29aca7,_0x2fd1a9=$(this)['is'](_0x57362a(0x158));if(_0x2fd1a9==!![]){var _0xca453e=$(this)['find']('.empidchk')[_0x57362a(0x163)](_0x57362a(0x146));if(_0xca453e==!![]){var _0x5b6d2a=$(this)['find'](_0x57362a(0x1fb))['val']();updateCompany(_0x57362a(0x1f4),_0x5b3ced,_0x5b6d2a);}}});}function getUserOutputDepartment(){var _0x42ce3f=a0_0x2c903c,_0x48f47f=$('#ddlTempDepartment')[_0x42ce3f(0x1e0)]();$(_0x42ce3f(0x1b9))[_0x42ce3f(0x198)](function(_0x5b0bf8){var _0x5ceefa=_0x42ce3f,_0x15be3c=$(this)['is'](_0x5ceefa(0x158));if(_0x15be3c==!![]){var _0x2dfcac=$(this)[_0x5ceefa(0x18d)](_0x5ceefa(0x1fb))[_0x5ceefa(0x163)](_0x5ceefa(0x146));if(_0x2dfcac==!![]){var _0x3d276c=$(this)['find'](_0x5ceefa(0x1fb))[_0x5ceefa(0x1e0)]();updateDepartment(_0x5ceefa(0x1f4),_0x48f47f,_0x3d276c);}}});}function getUserOutputManager(_0x2edd55){var _0x473297=a0_0x2c903c;ValidationCheckBox()==!![]?$(_0x473297(0x1b9))[_0x473297(0x198)](function(_0x26fb2c){var _0x208540=_0x473297,_0x34f310=$(this)['is'](_0x208540(0x158));if(_0x34f310==!![]){var _0x45ac49=$(this)[_0x208540(0x18d)](_0x208540(0x1fb))[_0x208540(0x163)]('checked');if(_0x45ac49==!![]){var _0x5bdb96=$(_0x208540(0x1f1))['val'](),_0xc7f5e4=$(_0x208540(0x1dd))[_0x208540(0x1e0)](),_0x210a5c=$(this)[_0x208540(0x18d)](_0x208540(0x1fb))[_0x208540(0x1e0)](),_0x3108c9=$('#ddlTempManager\x20option:selected')['text'](),_0x26015b=$('#ddlTempManager')[_0x208540(0x1e0)](),_0x1e0d34=$('#ddlTempOfficeLocation')[_0x208540(0x1e0)]();if(_0x2edd55=='manageronly')updateManager('Employees','','',_0x3108c9,_0x26015b,'',_0x210a5c);else{if(_0xc7f5e4==currentCompanyid)updateManager(_0x208540(0x1f4),_0xc7f5e4,_0x5bdb96,'','',_0x1e0d34,_0x210a5c);else{var _0x194458=$(this)['find']('td')[0x2][_0x208540(0x1b5)];EmployeeCheckListValidation(_0x194458,_0xc7f5e4)==![]?updateManager('Employees',_0xc7f5e4,_0x5bdb96,'','',_0x1e0d34,_0x210a5c):alert(_0x208540(0x204)+_0x194458);}}}}}):alert('Please\x20select\x20at\x20least\x20one\x20record\x20from\x20list.');}function ValidationCheckBox(){var _0x20422c=a0_0x2c903c,_0x28d36f=![];return $('#tableTempEmp\x20tbody\x20tr')[_0x20422c(0x198)](function(_0x2ed552){var _0x49d30b=_0x20422c,_0x55fe4f=$(this)['is'](_0x49d30b(0x158));if(_0x55fe4f==!![]){var _0x387b5c=$(this)['find'](_0x49d30b(0x1fb))[_0x49d30b(0x163)](_0x49d30b(0x146));_0x387b5c==!![]&&(_0x28d36f=!![]);}}),_0x28d36f;}function WaitMessage(){var _0x25fb0d=a0_0x2c903c;waitingDialog[_0x25fb0d(0x15e)]();}function a0_0x427d(){var _0x3eee39=['User\x20is\x20already\x20added\x20in\x20this\x20company\x20,','<tr\x20style=\x27','toString','Primary\x20Company\x20has\x20been\x20changed.','evenrow','</td><td>','DepartmentId','/_api/web/siteusers(@v)?@v=\x27','checked','.companychnageid','i:0#.f|membership|','LogonName','11wRwltX','tableTempEmp','POST','keyup','\x27)/items?$select=*,Department/DepartmentName,Department/ID&$expand=Department&$filter=CompanyId\x20eq\x20\x27','#changePrimaryCompanyButton','ManageCompany','Please\x20select\x20department\x20.','html','Active','when','/_api/web/lists/getbytitle(\x27Employees\x27)/items?$top=5000&$select=ID,Status,JoiningDate,DateOfAnniversary,FullName,DateOfBirth,LogonName/UserName,OfficeLocation/OfficeName,Email,Department/DepartmentName,Designation,Company/CompanyName,Company/ID,Manager,MobileNumber&$expand=LogonName,Company,Department,OfficeLocation&$filter=CompanyId\x20\x20eq\x20\x27','evenselected','MobileNumber',':visible','01/01/1970','UserName','PageAuthorization','<div\x20class=\x27row\x27\x20style=\x27text-align:center\x27><div\x20class=\x27col-md-12\x27><input\x20type=\x27button\x27\x20class=\x27btn\x20\x20btn-outline-success\x27\x20id=\x27changePrimaryCompanyButton\x27\x20value=\x27Change\x20Primary\x20Company\x27></div></div>','/_api/web/lists/getbytitle(\x27Employees\x27)/items?$top=5000&$select=ID,FullName,PrimaryCompany,LogonName/UserName,Department/DepartmentName,Company/CompanyName,Company/ID&$expand=LogonName,Company,Department&$filter=LogonName/UserName\x20\x20eq\x20\x27','show','#columns','/_api/web/lists/getbytitle(\x27Companies\x27)/items?$select=ID,CompanyName','ready','ProcessApprovers','prop','<option\x20value=\x22-1\x22>Top\x20Leader</option>','slice','<option\x20value=\x220\x22>-All\x20Department-</option>','Unauthorized\x20access','&mode=edit&department=&employeedIddetails=','Designation','push','dd/MM/yyyy','table','Deferred','responseJSON','#ddlTempManagerFilter','Email','Primary','<option\x20value=\x220\x22>-Select\x20Department-</option>','765594uMtZbP','toISOString','userId','#btnCompany','If\x20you\x20have\x20selected\x20company\x20then\x20department\x20is\x20mandatory\x20to\x20select\x20.\x20','#__REQUESTDIGEST','selectedrow','../Pages/EmployeeDetails.aspx?WebAppId=','href','application/json;\x20odata=verbose','DateOfBirth','yyyy','.myHead','#idsynch','search','2642990eGUtNu','<option\x20value=\x220\x22>-All\x20Manager-</option>','5854072gDhRPI','sorter','#search_field','#mainDivCompanies','application/json;odata=verbose','Please\x20select\x20company\x20.','#btnManager','background-color:\x20#ffdcdc;','toLowerCase','find','/_api/web/lists/getbytitle(\x27Departments\x27)/items?$select=ID,CompanyIDId/ID,DepartmentName&$filter=CompanyIDId\x20\x20eq\x20\x27','totalrecords','#columns\x20option[value=\x220\x22]','SP.Data.','248390MEELrB','parent','remove','760EMRjgq','click','attr','each','totalpages','#query','OfficeName','JoiningDate','ListItem','oddrow','getMonth','hide','results','../Pages/EmployeeSynchronous.aspx?WebAppId=','\x27)/GetItemById(\x27','Manager','PrimaryCompany','frameElement','get','length','pagedropdown','webAbsoluteUrl','#ddlTempManager','value','append','<option\x20value=\x220\x22>-Select\x20Office\x20Location-</option>','TechAdmin','User\x20:','1IypAYD','#ddlTempDepartmentFilter','selectedIndex','</td><td\x20style=\x27padding:\x205px;\x27>','innerText','<input\x20type=\x27checkbox\x27\x20class=\x27companycheckbox\x27\x20\x20','checked=\x27true\x27','GET','#tableTempEmp\x20tbody\x20tr','notManager','message','Please\x20select\x20any\x20value\x20from\x20dropdownlist\x20.','javascript:GetAllocatedEmployeesCompanies(\x27','<option\x20value=\x220\x22>-Select\x20Company-</option>','OfficeLocationId','DepartmentName','ShowCommonStandardDateFormat','#modalTitanPreview','Please\x20select\x20at\x20least\x20one\x20record\x20from\x20list.','Status','stringify','error','CompanyName','/_api/web/lists/getbytitle(\x27','\x27\x20and\x20(WebPartName\x20eq\x20\x27HR\x20Admin\x27\x20or\x20WebPartName\x20\x20eq\x20\x27Tech\x20Admin\x27)','location','columns','&sourcelocation=../Pages/Show_Employee.aspx?WebAppId=','log','<div\x20style=\x27width:100%;text-align:\x20center;font-size:14px\x27>No\x20Record\x20Found</div>','getQueryStringParameter','empty','#ddlTempOfficeLocation','siteAbsoluteUrl','CompanyId','close','done','Please\x20select\x20manager\x20name\x20.','resolve','#tableCompanyChange\x20tbody\x20tr','617464IlZewO','SiteAdmin','reject','promise','#ddlTempCompany','<table\x20id=\x27tableCompanyChange\x27\x20border=\x271\x27><thead><tr><td\x20style=\x27padding:\x205px;\x27>Company</td><td\x20style=\x27padding:\x205px;\x27>Department</td><td\x20style=\x27padding:\x205px;\x27>Primary\x20Company</td></tr></thead>','<option></option>','val','Please\x20select\x20one\x20company\x20as\x20a\x20primary.','currentpage','DateOfAnniversary','#btnDepartment','head','<input\x20type=\x27checkbox\x27\x20class=\x27companycheckbox\x27\x20id=\x27myCheck\x27>','LogonName\x20is\x20not\x20in\x20valid\x20format\x20!','<tbody>','not','.ddlpaging','ajax','4656MSaqyj','\x27)/items','Department','manageronly','OfficeLocation','#ddlTempDepartment','text','ParentId','Employees','7ZXwCLa','/_api/web/lists/getbytitle(\x27Employees\x27)/items?$top=5000&$select=ID,DepartmentId,LogonName/UserName,Company/ID&$expand=LogonName,Company&$filter=LogonName/UserName\x20\x20eq\x20\x27','<div\x20class=\x27row\x27\x20style=\x27text-align:center\x27><div\x20class=\x27col-md-12\x27><input\x20type=\x27button\x27\x20id=\x27changePrimaryCompanyButton\x27\x20class=\x27btn\x20\x20btn-outline-success\x27\x20value=\x27Change\x20Primary\x20Company\x27></div></div>','</a></td><td>','background-color:\x20#fff;','2773341LyUvAh','.empidchk','.companycheckbox','split','indexOf','charAt','\x27\x20and\x20CompanyId\x20eq\x20\x27','\x27\x20><td\x20style=\x27text-align:center;\x27><input\x20type=\x27checkbox\x27\x20\x20class=\x27empidchk\x27\x20name=\x27empid\x27\x20value=','\x20is\x20not\x20valid\x20user\x20!','waitDialog'];a0_0x427d=function(){return _0x3eee39;};return a0_0x427d();}function WaitMessage2(){var _0x413f67=a0_0x2c903c;window[_0x413f67(0x193)]['eval']('window.waitDialog\x20=\x20SP.UI.ModalDialog.showWaitScreenWithNoClose(\x27Wait\x20a\x20moment,Processing..\x27,\x20\x27\x27,\x2090,\x20450);');}function CloseWaitDialog(){waitingDialog['hide']();}function CloseWaitDialog2(){var _0x5523e9=a0_0x2c903c;window[_0x5523e9(0x1a6)]!=null?window[_0x5523e9(0x193)]['waitDialog']!=null&&window[_0x5523e9(0x193)][_0x5523e9(0x203)][_0x5523e9(0x1d4)]():window[_0x5523e9(0x193)]['waitDialog']!=null&&window[_0x5523e9(0x193)][_0x5523e9(0x203)]['close']();}function updateCompany(_0x100e0a,_0xe1485,_0x4a0694){var _0x243a39=a0_0x2c903c;try{var _0x394694,_0x3d4c8e=GetItemTypeForListName(_0x100e0a);_0x394694={'__metadata':{'type':_0x3d4c8e},'CompanyId':_0xe1485},$[_0x243a39(0x154)](updateItemWithID(_0x100e0a,_0x394694,_0x4a0694))['done'](function(_0x4d5a71){});}catch(_0x2f9351){console[_0x243a39(0x1cd)](_0x2f9351['message']);}}function updateDepartment(_0x1b9945,_0x2d0cd2,_0x58824e){var _0x1c43eb=a0_0x2c903c;try{var _0x16c455,_0xcd9a71=GetItemTypeForListName(_0x1b9945);_0x16c455={'__metadata':{'type':_0xcd9a71},'DepartmentId':_0x2d0cd2},$[_0x1c43eb(0x154)](updateItemWithID(_0x1b9945,_0x16c455,_0x58824e))['done'](function(_0x10d05b){});}catch(_0x3feb5e){console[_0x1c43eb(0x1cd)](_0x3feb5e[_0x1c43eb(0x1bb)]);}}function updateManager(_0x137e6c,_0x3c624c,_0x1130e5,_0x219455,_0x196dfc,_0x470b93,_0x40f8ef){var _0x13a096=a0_0x2c903c;try{var _0x3cb3e8,_0xb2b576=GetItemTypeForListName(_0x137e6c);_0x3cb3e8={'__metadata':{'type':_0xb2b576},'Manager':_0x219455,'ParentId':_0x196dfc,'DepartmentId':_0x1130e5,'CompanyId':_0x3c624c,'OfficeLocationId':_0x470b93},(_0x470b93==''||_0x470b93==null||_0x470b93=='0')&&delete _0x3cb3e8[_0x13a096(0x1bf)],(_0x196dfc==''||_0x196dfc==null)&&delete _0x3cb3e8[_0x13a096(0x1f3)],(_0x3c624c==''||_0x3c624c==null||_0x3c624c=='0')&&delete _0x3cb3e8['CompanyId'],(_0x1130e5==null||_0x1130e5==''||_0x1130e5=='0')&&delete _0x3cb3e8[_0x13a096(0x144)],(_0x219455==null||_0x219455==''||_0x219455=='0')&&delete _0x3cb3e8[_0x13a096(0x1a4)],$[_0x13a096(0x154)](updateItemWithID(_0x137e6c,_0x3cb3e8,_0x40f8ef))[_0x13a096(0x1d5)](function(_0x5a9903){});}catch(_0x818a4d){console[_0x13a096(0x1cd)](_0x818a4d[_0x13a096(0x1bb)]);}}function GetItemTypeForListName(_0x1b9359){var _0x1e270e=a0_0x2c903c;return _0x1e270e(0x191)+_0x1b9359[_0x1e270e(0x1ff)](0x0)['toUpperCase']()+_0x1b9359[_0x1e270e(0x1fd)]('\x20')['join']('')[_0x1e270e(0x165)](0x1)+_0x1e270e(0x19d);}function updateItemWithID(_0x3255f8,_0x4dd738,_0x3c4d0c){var _0x448272=a0_0x2c903c,_0x539929=$[_0x448272(0x16d)]();return $[_0x448272(0x1eb)]({'url':_spPageContextInfo[_0x448272(0x1aa)]+_0x448272(0x1c8)+_0x3255f8+_0x448272(0x1a3)+_0x3c4d0c+'\x27)','type':_0x448272(0x14c),'headers':{'accept':_0x448272(0x188),'X-RequestDigest':$(_0x448272(0x178))[_0x448272(0x1e0)](),'content-Type':'application/json;odata=verbose','X-Http-Method':'PATCH','If-Match':'*'},'data':JSON[_0x448272(0x1c5)](_0x4dd738),'async':![],'success':function(_0xd765a0){var _0x196ab8=_0x448272;_0x539929[_0x196ab8(0x1d7)](!![]);},'error':function(_0x189ef1){var _0x847d47=_0x448272;CloseWaitDialog(),alert(JSON['stringify'](_0x189ef1)),_0x539929[_0x847d47(0x1db)](_0x189ef1);}}),_0x539929[_0x448272(0x1dc)]();}function ChangePrimaryCompany(){var _0x182534=a0_0x2c903c,_0x38acff=0x0;return $(_0x182534(0x1fc))[_0x182534(0x198)](function(_0x192391){var _0x5f4f54=_0x182534;$(this)[_0x5f4f54(0x163)](_0x5f4f54(0x146))&&_0x38acff++;}),_0x38acff;}function SubmitPrimaryCompany(){var _0x3981fb=a0_0x2c903c;$(_0x3981fb(0x14f))['click'](function(){var _0x2bf751=_0x3981fb;ChangePrimaryCompany()==0x1?($(_0x2bf751(0x1d8))[_0x2bf751(0x198)](function(_0x35eb76){var _0x10bfa5=_0x2bf751,_0x2e1c73=$(this)['find']('.companycheckbox')[_0x10bfa5(0x163)](_0x10bfa5(0x146)),_0x473958=$(this)[_0x10bfa5(0x18d)](_0x10bfa5(0x147))[_0x10bfa5(0x1e0)]();_0x2e1c73==!![]?UpdatePrimaryCompany('Employees',_0x10bfa5(0x171),_0x473958):UpdatePrimaryCompany('Employees','',_0x473958);}),alert(_0x2bf751(0x141))):alert(_0x2bf751(0x1e1));});}function UpdatePrimaryCompany(_0x4cddd4,_0x31fb0b,_0x2b04b1){var _0xe30c5b=a0_0x2c903c;try{var _0x5956a9,_0x33ba42=GetItemTypeForListName(_0x4cddd4);_0x5956a9={'__metadata':{'type':_0x33ba42},'PrimaryCompany':_0x31fb0b},$[_0xe30c5b(0x154)](updateItemWithID(_0x4cddd4,_0x5956a9,_0x2b04b1))['done'](function(_0x3ddadd){});}catch(_0x5d6b51){console[_0xe30c5b(0x1cd)](_0x5d6b51[_0xe30c5b(0x1bb)]);}}function GetAllocatedEmployeesCompanies(_0x43480c){var _0x37999f=a0_0x2c903c;try{var _0x29375a=_spPageContextInfo[_0x37999f(0x1aa)]+_0x37999f(0x15d)+_0x43480c+'\x27';$[_0x37999f(0x1eb)]({'url':_0x29375a,'headers':{'Accept':'application/json;odata=verbose'},'async':!![],'success':function(_0x2b3cbe){var _0x11156f=_0x37999f,_0x15dd7c=_0x2b3cbe['d'][_0x11156f(0x1a1)],_0x1e2664=_0x11156f(0x1de),_0x103ef9='',_0x4f4dca=![];for(var _0x580a46=0x0;_0x580a46<_0x15dd7c[_0x11156f(0x1a8)];_0x580a46++){var _0x22dcea=_0x15dd7c[_0x580a46]['ID'],_0x6ec178=_0x15dd7c[_0x580a46]['LogonName'][_0x11156f(0x15a)];(_0x6ec178==null||_0x6ec178=='')&&(_0x6ec178='');var _0x8593e0=_0x15dd7c[_0x580a46]['Company'][_0x11156f(0x1c7)];(_0x8593e0==null||_0x8593e0=='')&&(_0x8593e0='');var _0x1b7aa1=_0x15dd7c[_0x580a46][_0x11156f(0x1ee)][_0x11156f(0x1c0)];(_0x1b7aa1==null||_0x1b7aa1=='')&&(_0x1b7aa1='');var _0x466f2c=_0x15dd7c[_0x580a46][_0x11156f(0x1a5)],_0x258dfb='',_0x5c6197=_0x11156f(0x1b7);_0x466f2c==null||_0x466f2c==''?(_0x258dfb=_0x11156f(0x1e6),_0x4f4dca=!![]):_0x258dfb=_0x11156f(0x1b6)+_0x5c6197+'\x20\x20id=\x27myCheck\x27>',_0x103ef9=_0x103ef9+'<tr><td\x20style=\x27padding:\x205px;\x27><input\x20style=\x27display:none\x27\x20type=\x27text\x27\x20class=\x27companychnageid\x27\x20value=\x27'+_0x22dcea+'\x27>'+_0x8593e0+_0x11156f(0x1b4)+_0x1b7aa1+'</td><td\x20style=\x27padding:\x205px;text-align:center;\x27>'+_0x258dfb+'</td></tr>';}var _0x5b20e1='';if(_0x15dd7c[_0x11156f(0x1a8)]==0x1&&_0x4f4dca==!![])_0x5b20e1=_0x11156f(0x15c);else _0x15dd7c[_0x11156f(0x1a8)]>0x1&&(_0x5b20e1=_0x11156f(0x1f7));var _0x2f6261=_0x1e2664+_0x11156f(0x1e8)+_0x103ef9+'</tbody>'+'</table>'+_0x5b20e1+'',_0x1880d7=$(_0x11156f(0x187));_0x1880d7[_0x11156f(0x152)](''),_0x15dd7c[_0x11156f(0x1a8)]==0x0&&(_0x2f6261=_0x2f6261+'<div\x20style=\x27width:100%;text-align:\x20center;font-size:14px\x27>Not\x20Defined\x20Yet</div>'),_0x1880d7[_0x11156f(0x1ad)](_0x2f6261),CloseWaitDialog(),$(_0x11156f(0x1c2))['modal']('show'),ChangePrimaryCompany(),SubmitPrimaryCompany();},'eror':function(_0x3d8918){var _0x50f4a5=_0x37999f;CloseWaitDialog(),console[_0x50f4a5(0x1cd)](_0x50f4a5(0x1c6));}});}catch(_0x2aa7c1){CloseWaitDialog(),alert(_0x37999f(0x1e7));}}function CheckUserPermission(_0x2987fc){var _0x3ebca7=a0_0x2c903c,_0x1d5cb1=_0x3ebca7(0x162),_0x2c97a7=_spPageContextInfo[_0x3ebca7(0x1aa)]+_0x3ebca7(0x1c8)+_0x1d5cb1+_0x3ebca7(0x14e)+_0x2987fc+'\x27\x20and\x20ContributorsId\x20eq\x20\x27'+_spPageContextInfo[_0x3ebca7(0x175)]+_0x3ebca7(0x1c9);$[_0x3ebca7(0x1eb)]({'url':_0x2c97a7,'type':_0x3ebca7(0x1a7),'headers':{'Accept':_0x3ebca7(0x188)},'success':function(_0x57c412){var _0x38508e=_0x3ebca7,_0xd0b69='',_0x3a29d4=_0x57c412['d'][_0x38508e(0x1a1)];if(_0x3a29d4['length']>0x0){}else window[_0x38508e(0x1ca)]['href']='../Pages/AdminPortal.aspx?WebAppId='+_0x2987fc+'',alert(_0x38508e(0x167));},'error':function(_0x5e2e2a){var _0x416fd9=_0x3ebca7;console['log'](_0x5e2e2a[_0x416fd9(0x16e)][_0x416fd9(0x1c6)]);}});}