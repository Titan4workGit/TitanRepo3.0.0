var a0_0x4176ad=a0_0x629e;(function(_0x49f837,_0x36d32c){var _0x32e11f=a0_0x629e,_0x4d1d8f=_0x49f837();while(!![]){try{var _0x579f99=-parseInt(_0x32e11f(0x1ab))/0x1*(-parseInt(_0x32e11f(0x1b6))/0x2)+-parseInt(_0x32e11f(0x1bc))/0x3+-parseInt(_0x32e11f(0x17c))/0x4+parseInt(_0x32e11f(0x1a2))/0x5+parseInt(_0x32e11f(0x1dd))/0x6*(-parseInt(_0x32e11f(0x175))/0x7)+-parseInt(_0x32e11f(0x1b3))/0x8+parseInt(_0x32e11f(0x179))/0x9;if(_0x579f99===_0x36d32c)break;else _0x4d1d8f['push'](_0x4d1d8f['shift']());}catch(_0x47b1a8){_0x4d1d8f['push'](_0x4d1d8f['shift']());}}}(a0_0x2edd,0x7acc8));var currentCompanyid='',getCurrentSiteUrl='',getCurrentUserId='',getCurrentUserName='';$(document)[a0_0x4176ad(0x1ac)](function(){var _0x455feb=a0_0x4176ad;waitingDialog[_0x455feb(0x1d1)](),currentCompanyid=titanForWork[_0x455feb(0x15c)]('CompanyId'),currentCompanyid!=null&&currentCompanyid!=''&&(currentCompanyid[_0x455feb(0x189)]('#')!=-0x1&&(currentCompanyid=currentCompanyid[_0x455feb(0x1e0)]('#')[0x0]),currentCompanyid=currentCompanyid),GetCurrentUserDetails(),getCurrentSiteUrl=GetSiteUrl(),LoadAllOcasion(getCurrentSiteUrl),$(_0x455feb(0x167))['click'](function(){var _0x4808a5=_0x455feb,_0x175d11=$(_0x4808a5(0x16b))[_0x4808a5(0x1dc)](),_0x8fe5da=$(_0x4808a5(0x18b))['val']();_0x175d11[_0x4808a5(0x19b)]>0x0&&_0x175d11['trim']()['length']>0x0&&(_0x175d11[_0x4808a5(0x1a6)]()[_0x4808a5(0x19b)]<=0x64?AddNewEmployeeResponse(_0x175d11,_0x8fe5da):alert(_0x4808a5(0x17e)));}),setTimeout(function(){var _0x45ab4a=_0x455feb;waitingDialog[_0x45ab4a(0x155)]();},0x7d0);});function BindYear(){var _0x44acf3=a0_0x4176ad,_0x4e0d21=new Date(),_0x47a754=_0x4e0d21[_0x44acf3(0x1a9)]();for(var _0x2207d5=_0x47a754;_0x2207d5>_0x47a754-0xb;_0x2207d5--){$('#ddlyear')['append']($('<option></option>')[_0x44acf3(0x191)](_0x44acf3(0x1e4),_0x2207d5)['text'](_0x2207d5));}}function BindMonth(){var _0x3ace90=a0_0x4176ad,_0x4a9ded=[_0x3ace90(0x1ad),_0x3ace90(0x1a8),_0x3ace90(0x1c3),'April',_0x3ace90(0x159),'June','July','August','September',_0x3ace90(0x1b7),_0x3ace90(0x178),_0x3ace90(0x1b8)];for(var _0x2722af=0x0;_0x2722af<_0x4a9ded[_0x3ace90(0x19b)];_0x2722af++){$(_0x3ace90(0x190))[_0x3ace90(0x185)]($(_0x3ace90(0x1c2))[_0x3ace90(0x191)](_0x3ace90(0x1e4),_0x4a9ded[_0x2722af])[_0x3ace90(0x172)](_0x4a9ded[_0x2722af]));}}function GetSiteUrl(){var _0x969fa1=a0_0x4176ad,_0x321d6d='',_0x1046de='';return _0x321d6d=_spPageContextInfo['webAbsoluteUrl']+_0x969fa1(0x1b2)+currentCompanyid+'\x27',$[_0x969fa1(0x196)]({'url':_0x321d6d,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x487ca7){var _0x50feaa=_0x969fa1,_0x4d4077=_0x487ca7['d'][_0x50feaa(0x1b9)];_0x4d4077[_0x50feaa(0x19b)]>0x0&&(_0x1046de=_0x4d4077[0x0][_0x50feaa(0x16c)]);},'eror':function(_0x342ebb){var _0x3a408b=_0x969fa1;console[_0x3a408b(0x1c1)](_0x3a408b(0x163));}}),_0x1046de;}var employeeOccasionListItemCollection=new Array();function LoadAllOcasion(_0x12d774){var _0x566819=a0_0x4176ad;employeeOccasionListItemCollection=[];var _0xdf2224=$(_0x566819(0x1ce));_0xdf2224[_0x566819(0x1de)]('');var _0x182424='',_0xb3687a=new Date(),_0x15c2ff=new Date(_0xb3687a);_0x15c2ff[_0x566819(0x1c4)](_0x15c2ff[_0x566819(0x173)]()-0x3),console[_0x566819(0x1c1)](_0xb3687a[_0x566819(0x164)]()),console[_0x566819(0x1c1)](_0x15c2ff[_0x566819(0x164)]()),_0x182424=_0x566819(0x1e3)+_0x15c2ff[_0x566819(0x164)]()+_0x566819(0x1d8)+_0xb3687a['toISOString']()+'\x27';var _0x1b70d8=_0x12d774+_0x566819(0x153)+_0x182424;$[_0x566819(0x196)]({'url':_0x1b70d8,'headers':{'Accept':'application/json;odata=verbose'},'async':!![],'success':function(_0xee5030){var _0x46ffdb=_0x566819,_0x269229=_0xee5030['d'][_0x46ffdb(0x1b9)],_0x595e62=new Array();if(_0x269229[_0x46ffdb(0x19b)]>0x0)for(var _0x4c8925=0x0;_0x4c8925<_0x269229[_0x46ffdb(0x19b)];_0x4c8925++){_0x595e62[_0x46ffdb(0x1a4)](EmployeeMonthProperties(_0x269229[_0x4c8925]['ID'],_0x269229[_0x4c8925][_0x46ffdb(0x15d)],_0x269229[_0x4c8925]['OccasionType'],_0x269229[_0x4c8925][_0x46ffdb(0x1d9)]));}var _0x4d7a92='';for(var _0x4c8925=0x0;_0x4c8925<_0x595e62[_0x46ffdb(0x19b)];_0x4c8925++){_0x4c8925==0x0?_0x4d7a92=_0x46ffdb(0x1a5)+_0x595e62[_0x4c8925][_0x46ffdb(0x1c0)]:_0x4d7a92=_0x4d7a92+_0x46ffdb(0x187)+_0x595e62[_0x4c8925]['EmpId'];}_0x4d7a92[_0x46ffdb(0x19b)]!=0x0&&GetEmployeesDetails(_0x4d7a92,_0x595e62),GetEmployeesDOB_DOA();},'eror':function(_0x411ef4){var _0x209c9d=_0x566819;console[_0x209c9d(0x1c1)](_0x209c9d(0x163));}});}function EmployeeMonthProperties(_0x1645bb,_0x222532,_0x452e54,_0x5bf439){var _0x4f625e=a0_0x4176ad,_0x4ceac3={};return _0x4ceac3['Id']=_0x1645bb,_0x4ceac3[_0x4f625e(0x1c0)]=_0x222532,_0x4ceac3[_0x4f625e(0x18c)]=_0x452e54,_0x4ceac3[_0x4f625e(0x1d9)]=_0x5bf439,_0x4ceac3;}function EmployeeProperties(_0x464055,_0x3fda9b,_0x4451e9,_0x5dfaad,_0x2cbf53,_0x168db0,_0x5ae24a,_0x4b72ec,_0x46a856,_0x796735,_0xf9e48f){var _0x486dac=a0_0x4176ad,_0x1ea668={};return _0x1ea668['Id']=_0x464055,_0x1ea668[_0x486dac(0x1d5)]=_0x3fda9b,_0x1ea668[_0x486dac(0x18c)]=_0x4451e9,_0x1ea668[_0x486dac(0x1d9)]=_0x5dfaad,_0x1ea668['Name']=_0x2cbf53,_0x1ea668[_0x486dac(0x195)]=_0x168db0,_0x1ea668['Department']=_0x5ae24a,_0x1ea668[_0x486dac(0x154)]=_0x4b72ec,_0x1ea668[_0x486dac(0x176)]=_0x46a856,_0x1ea668[_0x486dac(0x158)]=_0x796735,_0x1ea668[_0x486dac(0x181)]=_0xf9e48f,_0x1ea668;}function GetEmployeesDetails(_0x22802f,_0x5cee7e){var _0xd54990=a0_0x4176ad,_0x4e6855=_spPageContextInfo[_0xd54990(0x150)]+_0xd54990(0x1d3)+_0x22802f;$[_0xd54990(0x196)]({'url':_0x4e6855,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x3dc20e){var _0x1e9d12=_0xd54990,_0x87b62=_0x3dc20e['d'][_0x1e9d12(0x1b9)];for(var _0x2b8f72=0x0;_0x2b8f72<_0x87b62[_0x1e9d12(0x19b)];_0x2b8f72++){var _0x22887d=_0x87b62[_0x2b8f72]['ID'],_0x3755b7=_0x87b62[_0x2b8f72][_0x1e9d12(0x14d)]['Title'];(_0x3755b7==null||_0x3755b7=='')&&(_0x3755b7='NA');var _0x3e4ca7=_0x87b62[_0x2b8f72][_0x1e9d12(0x1c5)];(_0x3e4ca7==null||_0x3e4ca7=='')&&(_0x3e4ca7='NA');var _0x437da7=_0x87b62[_0x2b8f72]['Email'];(_0x437da7==null||_0x437da7=='')&&(_0x437da7='NA');var _0xbcfda1=_0x87b62[_0x2b8f72]['Department'][_0x1e9d12(0x14f)];(_0xbcfda1==null||_0xbcfda1=='')&&(_0xbcfda1='NA');var _0xd658ae=_0x87b62[_0x2b8f72]['Designation'];(_0xd658ae==null||_0xd658ae=='')&&(_0xd658ae='NA');var _0x2222fc=_0x87b62[_0x2b8f72][_0x1e9d12(0x161)];(_0x2222fc==null||_0x2222fc=='')&&(_0x2222fc='NA');for(var _0x3dbf04=0x0;_0x3dbf04<_0x5cee7e[_0x1e9d12(0x19b)];_0x3dbf04++){if(_0x5cee7e[_0x3dbf04][_0x1e9d12(0x1c0)]==_0x22887d){var _0x6ede=_0x5cee7e[_0x3dbf04]['Id'],_0x26118c=_0x5cee7e[_0x3dbf04][_0x1e9d12(0x18c)],_0x101a14=_0x5cee7e[_0x3dbf04][_0x1e9d12(0x1d9)],_0x30a865=_0x6ede,_0x3c2033=GetAttachment(_0x87b62[_0x2b8f72][_0x1e9d12(0x166)]);employeeOccasionListItemCollection[_0x1e9d12(0x1a4)](EmployeeProperties(_0x6ede,_0x30a865,_0x26118c,_0x101a14,_0x3755b7,_0xd658ae,_0xbcfda1,_0x3e4ca7,_0x437da7,_0x2222fc,_0x3c2033));}}}},'eror':function(_0x1d0e35){var _0x2d8f9f=_0xd54990;console[_0x2d8f9f(0x1c1)](_0x2d8f9f(0x163));}});}function GetEmployeesDOB_DOA(){var _0xdb9e2f=a0_0x4176ad;debugger;var _0x4540f9=_0xdb9e2f(0x1ca)+currentCompanyid+_0xdb9e2f(0x1c9),_0x593807=_spPageContextInfo['webAbsoluteUrl']+_0xdb9e2f(0x1e1)+_0x4540f9;$[_0xdb9e2f(0x196)]({'url':_0x593807,'headers':{'Accept':'application/json;odata=verbose'},'async':![],'success':function(_0x1bb9ab){var _0x540729=_0xdb9e2f,_0x3f070b=_0x1bb9ab['d'][_0x540729(0x1b9)];for(var _0x51a6ff=0x0;_0x51a6ff<_0x3f070b[_0x540729(0x19b)];_0x51a6ff++){var _0x12e9c5=_0x3f070b[_0x51a6ff]['ID'],_0x19674f=_0x3f070b[_0x51a6ff]['LogonName'][_0x540729(0x1be)];(_0x19674f==null||_0x19674f=='')&&(_0x19674f='NA');var _0x5aa989=_0x3f070b[_0x51a6ff][_0x540729(0x1c5)];(_0x5aa989==null||_0x5aa989=='')&&(_0x5aa989='NA');var _0x204591=_0x3f070b[_0x51a6ff][_0x540729(0x176)];(_0x204591==null||_0x204591=='')&&(_0x204591='NA');var _0x4d23ae=_0x3f070b[_0x51a6ff][_0x540729(0x1a0)][_0x540729(0x14f)];(_0x4d23ae==null||_0x4d23ae=='')&&(_0x4d23ae='NA');var _0x5d3d9f=_0x3f070b[_0x51a6ff]['Designation'];(_0x5d3d9f==null||_0x5d3d9f=='')&&(_0x5d3d9f='NA');var _0x3dd232=_0x3f070b[_0x51a6ff]['MobileNumber'];(_0x3dd232==null||_0x3dd232=='')&&(_0x3dd232='NA');var _0x290de0=GetAttachment(_0x3f070b[_0x51a6ff][_0x540729(0x166)]),_0x2d3ee6=_0x3f070b[_0x51a6ff][_0x540729(0x156)],_0x517f93=_0x3f070b[_0x51a6ff]['MonthOfBirth'],_0x1199d4=new Date(),_0x4489e8=_0x1199d4[_0x540729(0x173)](),_0x15a184=_0x1199d4[_0x540729(0x1ba)](),_0x3a3718=_0x1199d4[_0x540729(0x1a9)](),_0x57f02d=_0x3f070b[_0x51a6ff]['ID'];if(GetLast7DaysData(_0x2d3ee6,_0x517f93)==!![]){var _0x5935d4=_0x540729(0x160),_0x18f73f=parseInt(_0x2d3ee6)+'/'+parseInt(_0x517f93),_0x251817='100'+_0x3f070b[_0x51a6ff]['ID']+parseInt(_0x517f93)+_0x3a3718;_0x3f070b[_0x51a6ff]['DateOfBirth']!=null&&employeeOccasionListItemCollection['push'](EmployeeProperties(_0x57f02d,_0x251817,_0x5935d4,_0x18f73f,_0x19674f,_0x5d3d9f,_0x4d23ae,_0x5aa989,_0x204591,_0x3dd232,_0x290de0));}var _0x3ebfba=_0x3f070b[_0x51a6ff][_0x540729(0x186)],_0x403ec0=_0x3f070b[_0x51a6ff][_0x540729(0x1bf)];if(GetLast7DaysData(_0x3ebfba,_0x403ec0)==!![]){var _0x5935d4='Wedding\x20Anniversary',_0x18f73f=parseInt(_0x3ebfba)+'/'+parseInt(_0x403ec0),_0x251817=_0x540729(0x19e)+_0x3f070b[_0x51a6ff]['ID']+parseInt(_0x517f93)+_0x3a3718;_0x3f070b[_0x51a6ff][_0x540729(0x1cd)]!=null&&employeeOccasionListItemCollection['push'](EmployeeProperties(_0x57f02d,_0x251817,_0x5935d4,_0x18f73f,_0x19674f,_0x5d3d9f,_0x4d23ae,_0x5aa989,_0x204591,_0x3dd232,_0x290de0));}}GenerateHTML(employeeOccasionListItemCollection);},'eror':function(_0x2b77f5){var _0x5b7bb5=_0xdb9e2f;console['log'](_0x5b7bb5(0x163));}});}function GetLast7DaysData(_0x5c60d5,_0x5639c9){var _0x1ff575=a0_0x4176ad,_0x5195ec=![],_0x24a69e=parseInt(_0x5c60d5),_0x3dde45=parseInt(_0x5639c9),_0x3d26ac=new Date(),_0xe3303=_0x3d26ac[_0x1ff575(0x173)](),_0x2141f7=_0x3d26ac['getMonth']();_0x2141f7=_0x2141f7+0x1;var _0x4d3573=_0xe3303-0x1,_0x261ad1=_0xe3303-0x2,_0x4f8af9=_0xe3303-0x3,_0x1bee72=_0xe3303-0x4,_0x1a7a61=_0xe3303-0x5,_0x11ab36=_0xe3303-0x6,_0x326fbb=_0xe3303-0x7;if(_0x24a69e>=_0xe3303-0x7){if(_0x24a69e>=0x16&&_0xe3303<0x7)_0x3dde45==_0x2141f7&&(_0x24a69e<=_0xe3303&&(_0x5195ec=!![]));else _0x24a69e<=_0xe3303&&(_0x3dde45==_0x2141f7&&(_0x5195ec=!![]));}return _0x5195ec;}function GenerateHTML(_0x286f4e){var _0x386507=a0_0x4176ad,_0x59a5a0=new Array();_0x59a5a0[_0x386507(0x1a4)](_0x386507(0x15a));currentCompanyid!=null&&currentCompanyid!=''&&(currentCompanyid[_0x386507(0x189)]('#')!=-0x1&&(currentCompanyid=currentCompanyid['split']('#')[0x0]),currentCompanyid=currentCompanyid);var _0x58ba01=UserExistInProcessApprover(currentCompanyid,'',_0x59a5a0);console[_0x386507(0x1c1)](_0x58ba01);var _0x4a60cd=![];for(var _0x31f153=0x0;_0x31f153<_0x58ba01[_0x386507(0x19b)];_0x31f153++){_0x58ba01[_0x31f153][_0x386507(0x16f)]=='Occasion'&&(_0x4a60cd=!![]);}var _0x12fe53='';for(var _0x5ab0bd=0x0;_0x5ab0bd<_0x286f4e['length'];_0x5ab0bd++){var _0x5d5f15=_spPageContextInfo['webServerRelativeUrl']+_0x386507(0x1c8)+_0x286f4e[_0x5ab0bd]['Id']+_0x386507(0x1d7),_0x2fbba4='';_0x4a60cd==!![]?_0x2fbba4=_0x386507(0x14e)+_0x5d5f15+_0x386507(0x1cc)+_0x386507(0x182)+_0x286f4e[_0x5ab0bd]['Id']+_0x386507(0x165):_0x2fbba4=_0x386507(0x1da);var _0x1f3e49=new Date(_0x286f4e[_0x5ab0bd]['OccasionDate']),_0x2dd55a='';_0x2dd55a=$['datepicker'][_0x386507(0x1e2)](_0x386507(0x19d),_0x1f3e49);var _0xe15450=new Date(),_0x4a656b='',_0x185709='';_0x4a656b=$['datepicker'][_0x386507(0x1e2)]('dd/mm/yy',_0xe15450);if(_0x286f4e[_0x5ab0bd][_0x386507(0x18c)]!=_0x386507(0x160)&&_0x286f4e[_0x5ab0bd][_0x386507(0x18c)]!=_0x386507(0x1b5))_0x4a656b==_0x2dd55a?_0x185709=_0x386507(0x170):_0x185709='<strong>(Belated)</strong>';else{_0x2fbba4=_0x386507(0x1da);var _0x5c4c9c=_0x286f4e[_0x5ab0bd][_0x386507(0x1d9)][_0x386507(0x1e0)]('/')[0x0];_0x5c4c9c==_0xe15450[_0x386507(0x173)]()?_0x185709=_0x386507(0x170):_0x185709=_0x386507(0x199);}var _0x585b9=_0x286f4e[_0x5ab0bd]['OccasionId'][_0x386507(0x1b1)]();_0x12fe53=_0x12fe53+_0x386507(0x193)+'<div\x20class=\x27tile_box\x27>'+_0x386507(0x1d6)+_0x286f4e[_0x5ab0bd]['ImageUrl']+'\x27\x20class=\x27img-circle\x20imageheightwidth\x27></p>'+'<div\x20class=\x27text-center\x20user_pic_content\x20\x27>'+'<p\x20class=\x27center-block\x20wish_font\x27>'+_0x286f4e[_0x5ab0bd][_0x386507(0x18c)]+'</p>'+_0x386507(0x177)+_0x185709+'</span>'+_0x386507(0x183)+_0x585b9+_0x386507(0x16e)+_0x286f4e[_0x5ab0bd][_0x386507(0x1cf)]+'</a></h5>'+_0x386507(0x177)+_0x286f4e[_0x5ab0bd]['Desgination']+_0x386507(0x16a)+'<span\x20class=\x27center-block\x27>Department\x20:\x20'+_0x286f4e[_0x5ab0bd]['Department']+_0x386507(0x16a)+'<span\x20class=\x27center-block\x27>Extension\x20:\x20'+_0x286f4e[_0x5ab0bd]['Extension']+_0x386507(0x16a)+'<span\x20class=\x27center-block\x27>'+_0x286f4e[_0x5ab0bd][_0x386507(0x176)]+_0x386507(0x16a)+_0x386507(0x1c6)+_0x286f4e[_0x5ab0bd]['MobileNo']+_0x386507(0x1d4)+_0x386507(0x17b)+_0x585b9+_0x386507(0x157)+_0x386507(0x15f)+_0x2fbba4+_0x386507(0x1a1)+_0x386507(0x184)+_0x386507(0x1a1)+'</div>'+_0x386507(0x1a1);}var _0x17fb6a=$(_0x386507(0x1ce));_0x17fb6a['html'](''),_0x17fb6a['append'](_0x12fe53);}function DeleteItem(_0x3eac57){var _0x59c519=a0_0x4176ad,_0x57fc13=confirm(_0x59c519(0x19f));_0x57fc13==!![]&&$['ajax']({'url':getCurrentSiteUrl+_0x59c519(0x1cb)+_0x3eac57+'\x27)','type':_0x59c519(0x1af),'headers':{'X-RequestDigest':$(_0x59c519(0x16d))[_0x59c519(0x1dc)](),'IF-MATCH':'*','X-HTTP-Method':_0x59c519(0x14c)},'success':function(_0x512ce0,_0x4ad428,_0x690442){var _0x49456c=_0x59c519;$(_0x49456c(0x190))['val']()==0x0?LoadAllOcasion(getCurrentSiteUrl):LoadAllOcasion(getCurrentSiteUrl);},'error':function(_0x295d2c,_0x339a3a,_0x2fcd4e){var _0x3dea15=_0x59c519;console['log'](data[_0x3dea15(0x1c7)][_0x3dea15(0x163)]);}});}function GetAttachment(_0xdbba1){var _0x4a9b64=a0_0x4176ad,_0x4a6965=_0x4a9b64(0x19c);return _0xdbba1[_0x4a9b64(0x1b9)][_0x4a9b64(0x19b)]>0x0&&(_0x4a6965=_0xdbba1[_0x4a9b64(0x1b9)][0x0]['ServerRelativeUrl']),_0x4a6965;}function GetActivityDetails(_0xeff6cd){var _0x35c89d=a0_0x4176ad;for(var _0x395972=0x0;_0x395972<employeeOccasionListItemCollection[_0x35c89d(0x19b)];_0x395972++){employeeOccasionListItemCollection[_0x395972]['OccasionId']==_0xeff6cd&&($(_0x35c89d(0x192))['text'](employeeOccasionListItemCollection[_0x395972][_0x35c89d(0x1cf)]),$(_0x35c89d(0x18f))[_0x35c89d(0x172)](employeeOccasionListItemCollection[_0x395972][_0x35c89d(0x195)]),$(_0x35c89d(0x1df))[_0x35c89d(0x172)](employeeOccasionListItemCollection[_0x395972][_0x35c89d(0x1a0)]),$(_0x35c89d(0x1ae))['attr']('src',employeeOccasionListItemCollection[_0x395972][_0x35c89d(0x181)]),$(_0x35c89d(0x18b))[_0x35c89d(0x1dc)](_0xeff6cd),$(_0x35c89d(0x16b))['attr'](_0x35c89d(0x15b),'to\x20wish,\x20write\x20your\x20message\x20here\x20!!'));}GetAllResponse(_0xeff6cd);}function GetAllResponse(_0x4c4c53){var _0x1e0085=a0_0x4176ad,_0x3091d6=_0x1e0085(0x17f)+_0x4c4c53+'\x27',_0x4058d2=getCurrentSiteUrl+_0x1e0085(0x1db)+_0x3091d6;$[_0x1e0085(0x196)]({'url':_0x4058d2,'headers':{'Accept':'application/json;odata=verbose'},'async':!![],'success':function(_0x317127){var _0x4b9940=_0x1e0085,_0x369325=_0x317127['d'][_0x4b9940(0x1b9)],_0x1060e9=$(_0x4b9940(0x194));_0x1060e9[_0x4b9940(0x1de)]('');if(_0x369325[_0x4b9940(0x19b)]>0x0){var _0x5cacc4='';for(var _0x592b4a=0x0;_0x592b4a<_0x369325[_0x4b9940(0x19b)];_0x592b4a++){var _0x83e54b=_spPageContextInfo[_0x4b9940(0x150)]+_0x4b9940(0x1bd)+currentCompanyid+_0x4b9940(0x174)+_0x369325[_0x592b4a]['EmployeeId']+_0x4b9940(0x1d7);_0x5cacc4=_0x5cacc4+_0x4b9940(0x152)+_0x83e54b+'\x27>'+_0x369325[_0x592b4a][_0x4b9940(0x1d2)]+_0x4b9940(0x18d)+_0x369325[_0x592b4a][_0x4b9940(0x1a7)]+_0x4b9940(0x17a);}_0x1060e9['append'](_0x5cacc4);}},'eror':function(_0x1d5dde){var _0x3a421b=_0x1e0085;console['log'](_0x3a421b(0x163));}});}function AddNewEmployeeResponse(_0x20a7a3,_0x46093b){var _0x1cd6be=a0_0x4176ad,_0x102779=GetSiteUrl(),_0x33239b=_0x1cd6be(0x188),_0x221bdf=GetItemTypeForListNameDetails(_0x33239b),_0x37f176;_0x37f176={'__metadata':{'type':_0x221bdf},'EmployeeId':getCurrentUserId[_0x1cd6be(0x1b1)](),'EmployeeName':getCurrentUserName,'Response':_0x20a7a3,'OccasionId':_0x46093b},$[_0x1cd6be(0x15e)](AddItemToList(getCurrentSiteUrl,_0x33239b,_0x37f176))[_0x1cd6be(0x1a3)](function(_0x33c156){var _0x3f9c1c=_0x1cd6be;$(_0x3f9c1c(0x16b))[_0x3f9c1c(0x1dc)](''),GetAllResponse(_0x46093b);});}function GetItemTypeForListNameDetails(_0x1b4cf8){var _0xb4aff6=a0_0x4176ad;return'SP.Data.'+_0x1b4cf8[_0xb4aff6(0x18a)](0x0)[_0xb4aff6(0x18e)]()+_0x1b4cf8['split']('\x20')[_0xb4aff6(0x19a)]('')[_0xb4aff6(0x197)](0x1)+_0xb4aff6(0x198);}function AddItemToList(_0x3d9bb8,_0x43c109,_0x1b9496){var _0x926b2d=a0_0x4176ad,_0x56b626=$[_0x926b2d(0x162)]();return $['ajax']({'url':_0x3d9bb8+'/_api/web/lists/getbytitle(\x27'+_0x43c109+_0x926b2d(0x1d0),'type':_0x926b2d(0x1af),'async':![],'headers':{'accept':_0x926b2d(0x171),'X-RequestDigest':$(_0x926b2d(0x16d))[_0x926b2d(0x1dc)](),'content-Type':_0x926b2d(0x171)},'data':JSON[_0x926b2d(0x169)](_0x1b9496),'success':function(_0x407928){var _0xfee31f=_0x926b2d;_0x56b626[_0xfee31f(0x1bb)](_0x407928);},'error':function(_0x2bb1f4){var _0x2ed38f=_0x926b2d;alert(JSON[_0x2ed38f(0x169)](_0x2bb1f4)),_0x56b626[_0x2ed38f(0x1b4)](_0x2bb1f4);}}),_0x56b626[_0x926b2d(0x151)]();}function GetCurrentUserDetails(){var _0x53f4e2=a0_0x4176ad;$[_0x53f4e2(0x196)]({'url':_spPageContextInfo[_0x53f4e2(0x1e5)]+_0x53f4e2(0x1aa),'method':_0x53f4e2(0x17d),'headers':{'Accept':_0x53f4e2(0x1b0)},'success':function(_0x16c92d){GetCurrentEmployeeID(_0x16c92d['d']['Id']);},'error':function(_0x65945a){}});}function a0_0x2edd(){var _0x1f96d0=['November','16188543HDrzSW','</li>','<span\x20class=\x27user_text\x27><a\x20href=\x27#\x27\x20onclick=\x27GetActivityDetails(','1594592BlneaA','GET','Maximum\x20100\x20characters\x20are\x20allowed.','&$filter=OccasionId\x20eq\x20\x27','/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$select=ID,FullName,LogonName/ID,LogonName/Title,LogonName/UserName&$orderby=FullName&$expand=LogonName&$filter=LogonName/ID\x20eq\x20\x27','ImageUrl','<a\x20style=\x27margin-left:\x206px;\x27\x20href=\x27#\x27\x20onclick=\x27DeleteItem(','<h5\x20class=\x27user_text\x27><a\x20href=\x27#\x27\x20onclick=\x27GetActivityDetails(','<div\x20class=\x27clearfix\x27></div>','append','DayOfAnniversary','\x20or\x20ID\x20eq\x20','OccasionResponse','indexOf','charAt','#OccasionId','OccasionType','</a><br>','toUpperCase','#modelPost','#ddlmonth','attr','#modelName','<div\x20class=\x27col-lg-3\x20col-md-6\x20col-sm-6\x20marginTop\x27>','#responseCollection','Desgination','ajax','slice','ListItem','<strong>(Belated)</strong>','join','length','https://cdn.jsdelivr.net/gh/Titan4workGit/TitanRepo3.0@latest/SiteAssets/EmployeeSynchronous/EmployeeDirectory/user_pic.jpg','dd/mm/yy','200','Are\x20you\x20sure,you\x20want\x20to\x20delete?','Department','</div>','1175050ODvJTr','done','push','ID\x20eq\x20','trim','Response','February','getFullYear','/_api/web/currentUser','8693dPXtdC','ready','January','#selectedimageurl','POST','application/json;\x20odata=verbose','toString','/_api/web/lists/getbytitle(\x27Companies\x27)/items?$select=ID,SiteURL&$filter=ID\x20eq\x20\x27','3186592QIfzxM','reject','Wedding\x20Anniversary','34osGPFO','October','December','results','getMonth','resolve','280881uKRBci','/Pages/EmployeeDetails.aspx?WebAppId=','Title','MonthOfAnniversary','EmpId','log','<option></option>','March','setDate','ExtensionName','<span\x20class=\x27center-block\x27\x20style=\x27display:none;\x27>','responseJSON','/Pages/AddOcassion.aspx?WebAppId=1&itemId=','\x27\x20and\x20Status\x20eq\x20\x27Active\x27','Company/ID\x20eq\x20\x27','/_api/web/lists/GetByTitle(\x27OccasionDetails\x27)/items(\x27','\x27><span\x20class=\x27btn\x20btn-outline-primary\x27>Edit</span></a>','DateOfAnniversary','#itemCollection','Name','\x27)/items','show','EmployeeName','/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$select=ID,Email,AttachmentFiles,FullName,Designation,Manager,MobileNumber,ExtensionName,LogonName/Title,LogonName/UserName,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department,AttachmentFiles&$filter=','\x20</span>','OccasionId','<p\x20class=\x27text-center\x20user_pic\x27><img\x20src=\x27','&sourcelocation=../Pages/ViewOccasion.aspx','\x27\x20and\x20OccasionDate\x20le\x20\x27','OccasionDate','<span\x20class=\x27center-block\x27\x20style=\x27height:34px\x27></span>','/_api/web/lists/getbytitle(\x27OccasionResponse\x27)/items?$select=ID,EmployeeId,EmployeeName,Response,OccasionId','val','6UIYxqa','html','#modelDepartment','split','/_api/web/lists/GetByTitle(\x27Employees\x27)/items?$select=ID,Email,DateOfBirth,DayOfBirth,MonthOfBirth,DateOfAnniversary,DayOfAnniversary,MonthOfAnniversary,AttachmentFiles,FullName,Designation,Manager,MobileNumber,ExtensionName,LogonName/Title,LogonName/UserName,Department/DepartmentName,Company/CompanyName,Company/ID,OfficeLocation/ID,OfficeLocation/OfficeName&$orderby=FullName&$expand=LogonName,OfficeLocation,Company,Department,AttachmentFiles&$filter=','formatDate','&$filter=OccasionDate\x20ge\x20\x27','value','webServerRelativeUrl','DELETE','LogonName','<a\x20href=\x27','DepartmentName','webAbsoluteUrl','promise','<li><a\x20href=\x27','/_api/web/lists/getbytitle(\x27OccasionDetails\x27)/items?$select=ID,UserNameId,EmployeeId,OccasionType,OccasionDate,OccasionImageURL&$orderby=ID\x20asc','Extension','hide','DayOfBirth',')\x27\x20data-toggle=\x27modal\x27\x20data-target=\x27#myModal\x27><b><u>Click\x20here\x20to\x20wish</u></b></a></span>','MobileNo','May','Occasion','placeholder','getQueryStringParameter','EmployeeId','when','<div\x20class=\x27text-center\x20marginTop15\x27>','Birthday','MobileNumber','Deferred','error','toISOString',')\x27><span\x20class=\x27btn\x20btn-outline-danger\x27>Delete</span></a>','AttachmentFiles','#responseSubmit','\x27\x20and\x20CompanyId\x20eq\x20\x27','stringify','</span>','#txtResponse','SiteURL','#__REQUESTDIGEST',')\x27\x20data-toggle=\x27modal\x27\x20data-target=\x27#myModal\x27>','webPartName','<strong>(Today)</strong>','application/json;odata=verbose','text','getDate','&mode=editview&department=&employeedIddetails=','5515545CCzFId','Email','<span\x20class=\x27center-block\x27>'];a0_0x2edd=function(){return _0x1f96d0;};return a0_0x2edd();}function a0_0x629e(_0xf97de2,_0x236044){var _0x2edd22=a0_0x2edd();return a0_0x629e=function(_0x629eed,_0x1a12dc){_0x629eed=_0x629eed-0x14c;var _0x456b0a=_0x2edd22[_0x629eed];return _0x456b0a;},a0_0x629e(_0xf97de2,_0x236044);}function GetCurrentEmployeeID(_0x39447d){var _0x3d3867=a0_0x4176ad,_0x1c443d=_spPageContextInfo['webAbsoluteUrl']+_0x3d3867(0x180)+_0x39447d+_0x3d3867(0x168)+currentCompanyid+'\x27';$[_0x3d3867(0x196)]({'url':_0x1c443d,'headers':{'Accept':_0x3d3867(0x171)},'async':!![],'success':function(_0x5a307d){var _0x4b5c4f=_0x3d3867,_0x51a002=_0x5a307d['d'][_0x4b5c4f(0x1b9)];for(var _0xea10=0x0;_0xea10<_0x51a002[_0x4b5c4f(0x19b)];_0xea10++){var _0xc7b6a8=_0x51a002[_0xea10]['ID'],_0x11f714=_0x51a002[_0xea10][_0x4b5c4f(0x14d)][_0x4b5c4f(0x1be)];(_0x11f714==null||_0x11f714=='')&&(_0x11f714='NA'),getCurrentUserId=_0xc7b6a8,getCurrentUserName=_0x11f714;}},'eror':function(_0x573630){var _0x208e0f=_0x3d3867;console[_0x208e0f(0x1c1)](_0x208e0f(0x163));}});}