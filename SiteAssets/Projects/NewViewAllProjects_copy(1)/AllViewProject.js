var a0_0x309488=a0_0x1d21;function a0_0x1d21(_0x1bef07,_0x792576){var _0x28aea2=a0_0x28ae();return a0_0x1d21=function(_0x1d2125,_0x4d8e99){_0x1d2125=_0x1d2125-0xc5;var _0x40c4f6=_0x28aea2[_0x1d2125];return _0x40c4f6;},a0_0x1d21(_0x1bef07,_0x792576);}(function(_0x1ba460,_0x33b8d2){var _0x2204ea=a0_0x1d21,_0x220185=_0x1ba460();while(!![]){try{var _0x277b96=parseInt(_0x2204ea(0xed))/0x1+-parseInt(_0x2204ea(0xf5))/0x2*(-parseInt(_0x2204ea(0x14c))/0x3)+-parseInt(_0x2204ea(0xc9))/0x4+parseInt(_0x2204ea(0x10b))/0x5*(-parseInt(_0x2204ea(0x110))/0x6)+parseInt(_0x2204ea(0x196))/0x7*(-parseInt(_0x2204ea(0x195))/0x8)+parseInt(_0x2204ea(0x173))/0x9*(-parseInt(_0x2204ea(0xfe))/0xa)+parseInt(_0x2204ea(0xf3))/0xb*(parseInt(_0x2204ea(0xda))/0xc);if(_0x277b96===_0x33b8d2)break;else _0x220185['push'](_0x220185['shift']());}catch(_0x3e83f1){_0x220185['push'](_0x220185['shift']());}}}(a0_0x28ae,0x18f0a));var IsdeptAdmin=![],IsProjectAdmin=![],Location=window['location'][a0_0x309488(0x154)]+'//'+window[a0_0x309488(0x170)][a0_0x309488(0x1c2)]+_spPageContextInfo[a0_0x309488(0x194)],today=new Date(),CurrentDate=today[a0_0x309488(0x11e)]()['substring'](0x0,0xa),filterArr=[],txtCompanyId=Logged_CompanyId,sorterTableMyProjectList,currentDlg='',clientContext='',PrjectgridInitiated=![],member=![];$(document)['ready'](function(){var _0x1f151d=a0_0x309488,_0x595541=_0x1f151d(0xee);debugger;getItemsWithQueryItem(_0x595541),nextItem(),getProjectRights(),bindEvent(),getProjectByGroup(projectListItemArr),getRight(IsProjectAdmin),initializePeoplePicker(_0x1f151d(0x146)),SP[_0x1f151d(0x109)]['executeOrDelayUntilScriptLoaded'](getCurrentURL_GetProjectGridEvent,'sp.js'),getCustomer(),getPrograms(),getLocation(),ChangeLabels(),filter(),$(_0x1f151d(0xcf))[_0x1f151d(0x105)](function(){var _0x2d600f=_0x1f151d,_0x172793=_spPageContextInfo[_0x2d600f(0x1c8)],_0x113f09=_0x172793+_0x2d600f(0x161)+Logged_CompanyId;location[_0x2d600f(0x19f)]=_0x113f09;}),$(_0x1f151d(0xf4))[_0x1f151d(0x105)](function(){projectListItemArr['sort'](function(_0x444e68,_0x24b5b2){var _0x104f11=a0_0x1d21,_0x42a211=new Date(_0x444e68[_0x104f11(0x172)]),_0xc85489=new Date(_0x24b5b2['Modified']);if(_0xc85489<_0x42a211)return-0x1;if(_0xc85489>_0x42a211)return 0x1;return 0x0;}),BindProjectGrid();});});var projectListItemArr=[];function getItemsWithQueryItem(_0x44631b){var _0x1cf535=a0_0x309488,_0x38878f=_0x1cf535(0x12b);return DeferredObj=$[_0x1cf535(0x122)](),$[_0x1cf535(0x199)]({'url':_spPageContextInfo[_0x1cf535(0x15c)]+'/_api/web/lists/getbytitle(\x27'+_0x38878f+_0x1cf535(0x165)+_0x44631b,'type':'GET','async':![],'headers':{'ACCEPT':_0x1cf535(0x1c3),'X-RequestDigest':$(_0x1cf535(0xd0))['val']()},'beforeSend':function(){var _0x2b48f6=_0x1cf535;$(_0x2b48f6(0xde))[_0x2b48f6(0x140)]();},'success':function(_0x5cc477){var _0x4f7582=_0x1cf535,_0x149e73=_0x5cc477['d'][_0x4f7582(0x11f)];_0x149e73[_0x4f7582(0x1a2)](function(_0x50f2cb,_0x25a6f2){var _0x95de3d=_0x4f7582,_0x357564=new Date(_0x50f2cb[_0x95de3d(0x172)]),_0xfe1727=new Date(_0x25a6f2[_0x95de3d(0x172)]);if(_0xfe1727<_0x357564)return-0x1;if(_0xfe1727>_0x357564)return 0x1;return 0x0;});for(var _0x2344da=0x0;_0x2344da<_0x149e73[_0x4f7582(0x1a9)];_0x2344da++){var _0x2e47dc=_0x149e73[_0x2344da][_0x4f7582(0xc6)],_0x9abff6=_0x149e73[_0x2344da][_0x4f7582(0x1a8)];(_0x9abff6==null||_0x9abff6==''||_0x9abff6==undefined)&&(_0x9abff6='');var _0x1bc491=_0x149e73[_0x2344da][_0x4f7582(0x119)];_0x1bc491==null&&(_0x1bc491='');var _0x44dc89=_0x149e73[_0x2344da][_0x4f7582(0x107)][_0x4f7582(0x13f)];(_0x44dc89==null||_0x44dc89==''||_0x44dc89==undefined)&&(_0x44dc89='');var _0x5732bd=_0x149e73[_0x2344da][_0x4f7582(0x13b)][_0x4f7582(0x13f)];(_0x5732bd==null||_0x5732bd==''||_0x5732bd==undefined)&&(_0x5732bd='');var _0x13cb4c=_0x149e73[_0x2344da][_0x4f7582(0x128)][_0x4f7582(0x13f)],_0x14de95=_0x149e73[_0x2344da][_0x4f7582(0x128)]['Id'];(_0x13cb4c==null||_0x13cb4c==''||_0x13cb4c==undefined||_0x13cb4c==_0x4f7582(0x18e))&&(_0x13cb4c='');var _0x395882=_0x149e73[_0x2344da][_0x4f7582(0x19e)],_0x1974ae=_0x149e73[_0x2344da][_0x4f7582(0x113)];_0x1974ae!=''&&_0x1974ae!=null?(_0x1974ae=new Date(_0x1974ae),_0x1974ae=$['datepicker'][_0x4f7582(0x178)](_0x4f7582(0x11c),_0x1974ae)):_0x1974ae='';var _0x5bf196=_0x149e73[_0x2344da][_0x4f7582(0x13c)];_0x5bf196!=''&&_0x5bf196!=null?(_0x5bf196=new Date(_0x5bf196),_0x5bf196=$[_0x4f7582(0x1aa)]['formatDate'](_0x4f7582(0x11c),_0x5bf196)):_0x5bf196='';var _0x3e2fed=new Date(_0x149e73[_0x2344da][_0x4f7582(0x10d)]);_0x3e2fed=$[_0x4f7582(0x1aa)]['formatDate'](_0x4f7582(0x11c),_0x3e2fed);var _0x4df45e=new Date(_0x149e73[_0x2344da]['PlanedEndDate']);_0x4df45e=$[_0x4f7582(0x1aa)]['formatDate']('dd-M-yy',_0x4df45e);var _0x479c37=_0x149e73[_0x2344da][_0x4f7582(0x17d)],_0x475b07=_0x149e73[_0x2344da][_0x4f7582(0x17d)][_0x4f7582(0x13f)],_0x32ec1e=_0x149e73[_0x2344da][_0x4f7582(0x17d)]['Id'],_0xd76503=_0x149e73[_0x2344da][_0x4f7582(0x187)],_0x300c90=_0x149e73[_0x2344da][_0x4f7582(0x197)],_0x37bb40=_0x149e73[_0x2344da][_0x4f7582(0x1af)],_0xd76503=_0x149e73[_0x2344da][_0x4f7582(0x187)];if(_0xd76503==null)_0xd76503='';var _0x95e40e=_0x149e73[_0x2344da][_0x4f7582(0x18b)][_0x4f7582(0x13f)],_0x9abff6=_0x149e73[_0x2344da]['ProjectCode'];_0x9abff6==null&&(_0x9abff6='');(_0x95e40e==null||_0x95e40e==''||_0x95e40e==undefined||_0x95e40e=='-Select-')&&(_0x95e40e='');var _0x2db12e=_0x149e73[_0x2344da]['ID'],_0x91cf96=_0x149e73[_0x2344da][_0x4f7582(0x17d)]['EMail'],_0x22466c=_spPageContextInfo[_0x4f7582(0x15c)]+_0x4f7582(0xeb)+escapeProperly(_0x91cf96),_0x13e7e5=_0x149e73[_0x2344da]['Department_ID']['Id'],_0x295e7d=_0x149e73[_0x2344da][_0x4f7582(0x13b)]['Id'],_0x427b53=_0x149e73[_0x2344da][_0x4f7582(0x172)];_0x295e7d==null&&(_0x295e7d='');var _0x47b7b5=_0x149e73[_0x2344da][_0x4f7582(0x107)]['Id'],_0x244bcd=_0x149e73[_0x2344da][_0x4f7582(0x121)];projectListItemArr[_0x4f7582(0x1a5)]({'ProjectName':_0x2e47dc,'PlanedEndDate1':_0x149e73[_0x2344da][_0x4f7582(0x177)],'ProjectCode':_0x9abff6,'Modified':_0x427b53,'ProjectDescription':_0x1bc491,'ClientName':_0x44dc89,'ProgramName':_0x5732bd,'TechnologyUsed':_0xd76503,'OfficeLocation':_0x13cb4c,'ActualStartDate':_0x1974ae,'ActualEndDate':_0x5bf196,'ActualEndDate1':_0x149e73[_0x2344da][_0x4f7582(0x13c)],'PlanedStartDate':_0x3e2fed,'PlanedEndDate':_0x4df45e,'ManagerName':_0x475b07,'ManagerId':_0x32ec1e,'OfficeLocationId':_0x14de95,'Status':_0x300c90,'Percentage':_0x37bb40,'DepartmentName':_0x95e40e,'ProjectCode':_0x9abff6,'ItemID':_0x2db12e,'ManagerEMail':_0x91cf96,'employeePicURL':_0x22466c,'Department_ID':_0x13e7e5,'ProgramID':_0x295e7d,'ClientID':_0x47b7b5,'CompanyId':_0x244bcd});}NextURL=_0x5cc477['d'][_0x4f7582(0x151)],DeferredObj[_0x4f7582(0x1c1)](_0x5cc477['d']);},'error':function(_0x246c82){var _0x143b30=_0x1cf535;DeferredObj[_0x143b30(0x106)](_0x246c82);}}),DeferredObj[_0x1cf535(0xd5)]();};function nextItem(){var _0x2a60c9=a0_0x309488;if(NextURL!=null){var _0x2537ae='?'+NextURL[_0x2a60c9(0x1c7)]('?')[0x1];if(_0x2537ae['includes'](_0x2a60c9(0x16e))==!![]){}getItemsWithQueryItem(_0x2537ae);}}function getProjectRights(){var _0x2f36e1=a0_0x309488,_0x143881=$[_0x2f36e1(0x122)](),_0x3588bb,_0x383bb9=_0x2f36e1(0xe4),_0x4296f2=titanForWork[_0x2f36e1(0xc7)]('CompanyId'),_0xddb22b=_spPageContextInfo[_0x2f36e1(0x15c)]+'/_api/web/lists/getbytitle(\x27'+_0x383bb9+'\x27)/items?$select=*&$filter=CompanyId\x20eq\x20\x27'+Logged_CompanyId+_0x2f36e1(0x13e)+_spPageContextInfo[_0x2f36e1(0x1ad)]+'\x27\x20and\x20WebPartName\x20eq\x20\x27Project\x20Admin\x27';return $['ajax']({'url':_0xddb22b,'headers':{'Accept':_0x2f36e1(0x1c3)},'async':![],'success':function(_0x5352cb){var _0x16dc24=_0x2f36e1,_0x24c552=_0x5352cb['d']['results'];_0x24c552[_0x16dc24(0x1a9)]>0x0?($(_0x16dc24(0xcf))['show'](),$('#btnViewProgram')[_0x16dc24(0x183)](),$(_0x16dc24(0xe9))[_0x16dc24(0x183)](),_0x143881['resolve'](!![]),$(_0x16dc24(0x175))[_0x16dc24(0x180)](!![]),IsProjectAdmin=!![]):(IsDepartmentAdmin(),IsdeptAdmin==!![]?($(_0x16dc24(0x101))[_0x16dc24(0x183)](),$(_0x16dc24(0xe9))[_0x16dc24(0x167)](),$(_0x16dc24(0xcf))[_0x16dc24(0x183)]()):(member=!![],$(_0x16dc24(0xe9))[_0x16dc24(0x167)]()),$('#hdnIsProjectAdmin')[_0x16dc24(0x180)](![]),_0x143881[_0x16dc24(0x1c1)](![]),IsProjectAdmin=![]);},'eror':function(_0x435296){console['log']($('#txtSomethingWentWrong')['val']());}}),_0x143881['promise']();}function IsDepartmentAdmin(){var _0xc9c5b9=a0_0x309488,_0x347a54=Logged_DepartmentId,_0x7a0ac=_0xc9c5b9(0xe4),_0x54eeb9=_spPageContextInfo[_0xc9c5b9(0x15c)]+_0xc9c5b9(0x168)+_0x7a0ac+_0xc9c5b9(0x192)+Logged_CompanyId+_0xc9c5b9(0x13e)+_spPageContextInfo['userId']+_0xc9c5b9(0x11d)+_0x347a54+_0xc9c5b9(0x149);return $['ajax']({'url':_0x54eeb9,'type':'get','headers':{'Accept':_0xc9c5b9(0x1c3)},'async':![],'success':function(_0x375b5b){var _0x217088=_0xc9c5b9,_0x657af3=_0x375b5b['d']['results'];_0x657af3[_0x217088(0x1a9)]>0x0?(IsdeptAdmin=!![],$(_0x217088(0xcf))[_0x217088(0x183)]()):(IsdeptAdmin=![],$(_0x217088(0xcf))[_0x217088(0x167)]());},'error':function(_0x23d369){var _0x5d9adc=_0xc9c5b9;console[_0x5d9adc(0xe2)](_0x23d369[_0x5d9adc(0xe6)]);}}),IsdeptAdmin;}var liveCheck=!![];function BindProjectGrid(){var _0x397d88=a0_0x309488,_0xaa0c48=Logged_DepartmentId,_0x466da7='',_0x1b5896=0x0;debugger;var _0x30e3da=projectListItemArr,_0x6217f3='';liveCheck==!![]&&(projectListItemArr=projectListItemArr['filter'](function(_0x43e6d6){var _0x24a873=a0_0x1d21;return _0x43e6d6[_0x24a873(0x197)]==_0x24a873(0x169);}));if(projectListItemArr['length']>0x0)for(var _0x459265=0x0;_0x459265<projectListItemArr[_0x397d88(0x1a9)];_0x459265++){_0x1b5896++;var _0x5ac21c=projectListItemArr[_0x459265][_0x397d88(0x197)];_0x6217f3+=_0x397d88(0xd8),_0x6217f3+=_0x397d88(0x135)+Location+_0x397d88(0x1c6)+Logged_CompanyId+_0x397d88(0x171)+projectListItemArr[_0x459265][_0x397d88(0x19a)]+_0x397d88(0xe3)+projectListItemArr[_0x459265]['ProjectName']+_0x397d88(0x162)+projectListItemArr[_0x459265][_0x397d88(0xc6)]+'</a>',_0x6217f3+=_0x397d88(0x181),_0x6217f3+=_0x397d88(0x17c),_0x6217f3+=_0x397d88(0x179)+projectListItemArr[_0x459265][_0x397d88(0x1a8)]+'</div>',_0x6217f3+=_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x181),_0x6217f3+='<label\x20class=\x22lable-view-name\x22\x20data-localize=\x22Program\x22>Program:</label>',_0x6217f3+=_0x397d88(0x14d)+projectListItemArr[_0x459265][_0x397d88(0x1c0)]+_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x125),_0x6217f3+=_0x397d88(0x1cb),_0x6217f3+='<div\x20class=\x22ellipsis-2\x22>'+projectListItemArr[_0x459265]['ClientName']+_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x181),_0x6217f3+=_0x397d88(0x144),_0x6217f3+=_0x397d88(0x179)+projectListItemArr[_0x459265]['DepartmentName']+_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x181),_0x6217f3+=_0x397d88(0x1b3),_0x6217f3+='<div>'+projectListItemArr[_0x459265][_0x397d88(0x1b7)]+_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x125),_0x6217f3+='<td>',_0x6217f3+=_0x397d88(0x102),_0x6217f3+=_0x397d88(0xf6),_0x6217f3+=_0x397d88(0xcb)+projectListItemArr[_0x459265][_0x397d88(0xf1)]+'\x22\x20alt=\x22user\x22>',_0x6217f3+=_0x397d88(0x13a),_0x6217f3+='<div\x20class=\x22project-manager-card-body\x22>',_0x6217f3+=_0x397d88(0xd4),_0x6217f3+=_0x397d88(0x17a)+projectListItemArr[_0x459265][_0x397d88(0x17d)]+_0x397d88(0xca),_0x6217f3+='<p\x20class=\x22member-email\x20text-ellipsis\x22>'+projectListItemArr[_0x459265][_0x397d88(0x1b1)]+_0x397d88(0x159),_0x6217f3+=_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x13a),_0x6217f3+='</td>',_0x6217f3+=_0x397d88(0x115);var _0x1f780a=new Date(projectListItemArr[_0x459265][_0x397d88(0xd7)][_0x397d88(0x127)](0x0,0xa)),_0x1389c3=new Date();_0x1389c3[_0x397d88(0x100)](_0x1389c3[_0x397d88(0x17f)]()-0x1),_0x1f780a=_0x1f780a[_0x397d88(0x1b2)](_0x397d88(0xf8));var _0x482e4d=new Date(_0x1389c3);_0x482e4d=_0x482e4d['format'](_0x397d88(0xf8)),_0x5ac21c==_0x397d88(0x169)&&(_0x6217f3+=_0x397d88(0x145),projectListItemArr[_0x459265][_0x397d88(0xf0)]>=0x64?(_0x6217f3+=_0x397d88(0x116)+projectListItemArr[_0x459265][_0x397d88(0x177)]+_0x397d88(0x1bf),_0x6217f3+=_0x397d88(0x124),_0x6217f3+='<div\x20class=\x22progress-bar\x20progress-bar-success\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:'+projectListItemArr[_0x459265][_0x397d88(0xf0)]+'%\x22>'):projectListItemArr[_0x459265][_0x397d88(0xf0)]<0x64&&_0x1f780a>=_0x482e4d?(_0x6217f3+=_0x397d88(0x116)+projectListItemArr[_0x459265][_0x397d88(0x177)]+'</span></p>',_0x6217f3+=_0x397d88(0x124),_0x6217f3+=_0x397d88(0x1bb)+projectListItemArr[_0x459265][_0x397d88(0xf0)]+'%\x22>'):(_0x6217f3+=_0x397d88(0xdd)+projectListItemArr[_0x459265][_0x397d88(0x177)]+'</span></p>',_0x6217f3+=_0x397d88(0x124),_0x6217f3+='<div\x20class=\x22progress-bar\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:'+projectListItemArr[_0x459265][_0x397d88(0xf0)]+_0x397d88(0x1a1))),_0x5ac21c==_0x397d88(0x166)&&(_0x6217f3+=_0x397d88(0x19d),_0x6217f3+=_0x397d88(0x134)+projectListItemArr[_0x459265]['PlanedEndDate']+'</span></p>',_0x6217f3+=_0x397d88(0x12c),_0x6217f3+=_0x397d88(0x147)+projectListItemArr[_0x459265][_0x397d88(0xf0)]+_0x397d88(0x1a1)),_0x5ac21c==_0x397d88(0x12f)&&(projectListItemArr[_0x459265][_0x397d88(0x17e)]>projectListItemArr[_0x459265][_0x397d88(0xd7)]?_0x6217f3+=_0x397d88(0x14a):_0x6217f3+=_0x397d88(0x1b6),_0x6217f3+=_0x397d88(0x158)+projectListItemArr[_0x459265][_0x397d88(0x13c)]+'</span></p>',_0x6217f3+=_0x397d88(0x16a),_0x6217f3+=_0x397d88(0x104)+projectListItemArr[_0x459265][_0x397d88(0xf0)]+_0x397d88(0x114)),_0x5ac21c=='OnHold'&&(_0x6217f3+='<p\x20class=\x22m-0\x20mb-10\x22\x20style=\x22color:#000000ab\x22\x20>On\x20Hold</p>',_0x6217f3+=_0x397d88(0x134)+projectListItemArr[_0x459265][_0x397d88(0x177)]+_0x397d88(0x1bf),_0x6217f3+=_0x397d88(0xe7),_0x6217f3+=_0x397d88(0x12d)),_0x6217f3+=_0x397d88(0x13a),_0x6217f3+=_0x397d88(0x13a),_0x6217f3+='</td>',_0x6217f3+=_0x397d88(0x1cb),_0x6217f3+=_0x397d88(0xfc),member==![]&&(_0x6217f3+=_0x397d88(0x176)+Location+_0x397d88(0x112)+Logged_CompanyId+_0x397d88(0x171)+projectListItemArr[_0x459265]['ItemID']+_0x397d88(0xe3)+projectListItemArr[_0x459265]['ProjectName']+_0x397d88(0x19b)),_0x6217f3+='</div></td></tr>',_0x466da7+=_0x397d88(0xd8)+projectListItemArr[_0x459265][_0x397d88(0xc6)]+_0x397d88(0xfa)+projectListItemArr[_0x459265]['TechnologyUsed']+_0x397d88(0xfa)+projectListItemArr[_0x459265][_0x397d88(0x1a8)]+_0x397d88(0xfa)+projectListItemArr[_0x459265][_0x397d88(0x1c0)]+_0x397d88(0xfa)+projectListItemArr[_0x459265][_0x397d88(0xf2)]+'</td><td>'+projectListItemArr[_0x459265][_0x397d88(0xcc)]+'</td><td>'+projectListItemArr[_0x459265]['OfficeLocation']+_0x397d88(0xfa)+projectListItemArr[_0x459265][_0x397d88(0x17d)]+_0x397d88(0xfa)+projectListItemArr[_0x459265][_0x397d88(0x197)]+_0x397d88(0xfa)+projectListItemArr[_0x459265][_0x397d88(0xf0)]+'%</td></tr>';}else _0x466da7+=_0x397d88(0x18f);$(_0x397d88(0x130))[_0x397d88(0x11b)](''),$(_0x397d88(0x19c))[_0x397d88(0x11b)](''),$(_0x397d88(0x150))[_0x397d88(0x167)](),$(_0x397d88(0x130))[_0x397d88(0xd1)](_0x6217f3),$(_0x397d88(0x19c))[_0x397d88(0xd1)](_0x466da7),$(_0x397d88(0x198))[_0x397d88(0x1bc)](_0x1b5896),projectListItemArr=_0x30e3da,liveCheck=![],projectListItemArr[_0x397d88(0x1a9)]>0x0?(GenerateTableMyProjectList(),$(_0x397d88(0x1b0))['prop'](_0x397d88(0xe8),0x1)):($(_0x397d88(0x150))[_0x397d88(0x183)](),$(_0x397d88(0x1a0))[_0x397d88(0x167)]());}function bindEvent(){var _0x5557cd=a0_0x309488;if(IsProjectAdmin==!![])projectListItemArr=projectListItemArr['filter'](function(_0x25d41a){var _0x50b72f=a0_0x1d21;return _0x25d41a[_0x50b72f(0x121)]==Logged_CompanyId;}),BindProjectGrid();else{if(IsdeptAdmin==!![]){filterArr=projectListItemArr,getProjectTeamDetails(),projectListItemArr=projectListItemArr[_0x5557cd(0x139)](function(_0x33922e){var _0x523cc1=_0x5557cd;return _0x33922e[_0x523cc1(0x18b)]==Logged_DepartmentId;}),newArr=[];for(var _0xa1fb2e=0x0;_0xa1fb2e<projectID['length'];_0xa1fb2e++){newArr=filterArr[_0x5557cd(0x139)](function(_0x3ac59f){var _0x45b998=_0x5557cd;return _0x3ac59f[_0x45b998(0x18b)]!=Logged_DepartmentId&&_0x3ac59f[_0x45b998(0x19a)]==projectID[_0xa1fb2e][_0x45b998(0xdb)];}),projectListItemArr=projectListItemArr[_0x5557cd(0x16b)](newArr);}BindProjectGrid();}else{newArr=[],getProjectTeamDetails();for(var _0xa1fb2e=0x0;_0xa1fb2e<projectID[_0x5557cd(0x1a9)];_0xa1fb2e++){newArr=projectListItemArr['filter'](function(_0x16bb56){var _0x5b3860=_0x5557cd;return _0x16bb56[_0x5b3860(0x19a)]==projectID[_0xa1fb2e][_0x5b3860(0xdb)];}),filterArr=filterArr[_0x5557cd(0x16b)](newArr);}projectListItemArr=filterArr,BindProjectGrid();}}$(_0x5557cd(0x10e))['click'](function(){var _0x564e01=_0x5557cd,_0x2ebf0c=_0x564e01(0xfd),_0x4e4c60=_0x564e01(0x148),_0x3b0c29=0xc8,_0x450016=0x190;currentDlg=SP['UI'][_0x564e01(0x14f)][_0x564e01(0x15a)](_0x2ebf0c,_0x4e4c60,_0x3b0c29,_0x450016),setTimeout(function(){generateProjectExcel();},0x64);});}function GenerateTableMyProjectList(){var _0x3109b6=a0_0x309488;sorterTableMyProjectList=new TINY[(_0x3109b6(0xe5))][(_0x3109b6(0x15d))]('sorterTableMyProjectList',_0x3109b6(0x133),{'headclass':_0x3109b6(0xec),'ascclass':_0x3109b6(0x155),'descclass':_0x3109b6(0x155),'evenclass':_0x3109b6(0x174),'oddclass':_0x3109b6(0x1b5),'evenselclass':_0x3109b6(0x120),'oddselclass':_0x3109b6(0x1b4),'paginate':!![],'size':0xa,'currentid':_0x3109b6(0x108),'totalid':_0x3109b6(0x1b8),'startingrecid':_0x3109b6(0x11a),'endingrecid':'endrecordMyProject','totalrecid':_0x3109b6(0x153),'hoverid':'selectedrowMyProject','pageddid':'pagedropdownMyProject','navid':_0x3109b6(0x1bd),'sortdir':![],'init':!![]});}var projectID=[];function getProjectTeamDetails(){var _0x543a4a=a0_0x309488,_0x111c71=_spPageContextInfo[_0x543a4a(0x15c)]+'/_api/lists/getByTitle(\x27ProjectTeamDetails\x27)/items?$Select=*,ProjectId&$filter=Status\x20eq\x20\x27Active\x27\x20and\x20TeamMember/ID\x20eq\x20'+_spPageContextInfo['userId']+'\x20and\x20CompanyId\x20eq\x20\x27'+Logged_CompanyId+'\x27&$top=5000';$[_0x543a4a(0x199)]({'url':_0x111c71,'type':_0x543a4a(0x12e),'async':![],'headers':{'Accept':_0x543a4a(0x1c3)},'success':function(_0x381ad1){var _0x583d5c=_0x543a4a,_0x2465be=_0x381ad1['d'][_0x583d5c(0x11f)];if(_0x2465be[_0x583d5c(0x1a9)]!=0x0)for(var _0x3cd0bd=0x0;_0x3cd0bd<_0x2465be[_0x583d5c(0x1a9)];_0x3cd0bd++){projectID[_0x583d5c(0x1a5)]({'projectId':_0x2465be[_0x3cd0bd][_0x583d5c(0x117)]});}}});}function generateProjectExcel(){var _0x198489=a0_0x309488;$('#exceltable')[_0x198489(0xd3)]({'type':'csv','exportHiddenCells':!![],'fileName':_0x198489(0x1a4)}),currentDlg[_0x198489(0x118)]();}function getLocation(){var _0x49b581=a0_0x309488,_0x5485ab,_0x40331e=_0x49b581(0x1b7);$('#ddlLocation')['append']($(_0x49b581(0x1ac))['val'](_0x49b581(0x1c4))[_0x49b581(0x1bc)](_0x49b581(0x1c4))),_0x5485ab=_spPageContextInfo[_0x49b581(0x15c)]+_0x49b581(0xef)+Logged_CompanyId+'\x27',$[_0x49b581(0x199)]({'url':_0x5485ab,'headers':{'Accept':_0x49b581(0x1c3)},'async':![],'success':function(_0x18b23d){var _0x2e1554=_0x49b581,_0x5ebd4b=_0x18b23d['d'][_0x2e1554(0x11f)];for(var _0x42bc3a=0x0;_0x42bc3a<_0x5ebd4b[_0x2e1554(0x1a9)];_0x42bc3a++){$(_0x2e1554(0x163))['append']($(_0x2e1554(0x1ac))['val'](_0x5ebd4b[_0x42bc3a]['Id'])['text'](_0x5ebd4b[_0x42bc3a]['Title']));}},'error':function(_0x53de7a){console['log'](_0x53de7a);}});}function getCustomer(){var _0x2bc429=a0_0x309488,_0x5e4426,_0x55762a=_0x2bc429(0x142);$(_0x2bc429(0xdc))['append']($('<option/>')[_0x2bc429(0x180)](_0x2bc429(0x1c4))[_0x2bc429(0x1bc)]('All')),_0x5e4426=_spPageContextInfo[_0x2bc429(0x15c)]+_0x2bc429(0x18c),$[_0x2bc429(0x199)]({'url':_0x5e4426,'headers':{'Accept':_0x2bc429(0x1c3)},'async':![],'success':function(_0x3f6cb7){var _0x4443ad=_0x2bc429,_0x39b54f=_0x3f6cb7['d'][_0x4443ad(0x11f)];for(var _0x567090=0x0;_0x567090<_0x39b54f[_0x4443ad(0x1a9)];_0x567090++){$('#ddlCustomer')['append']($(_0x4443ad(0x1ac))[_0x4443ad(0x180)](_0x39b54f[_0x567090]['Id'])[_0x4443ad(0x1bc)](_0x39b54f[_0x567090][_0x4443ad(0x13f)]));}},'error':function(_0x2339d3){var _0x145c3f=_0x2bc429;console[_0x145c3f(0xe2)](_0x2339d3);}});}function getPrograms(){var _0x5583f5=a0_0x309488,_0x546684,_0x1a169c=_0x5583f5(0xd2);$(_0x5583f5(0x1b9))[_0x5583f5(0xd1)]($('<option/>')[_0x5583f5(0x180)](_0x5583f5(0x1c4))[_0x5583f5(0x1bc)](_0x5583f5(0x1c4)));debugger;_0x546684=_spPageContextInfo[_0x5583f5(0x15c)]+'/_api/web/lists/getbytitle(\x27ProgramList\x27)/items?$select=*',$[_0x5583f5(0x199)]({'url':_0x546684,'headers':{'Accept':_0x5583f5(0x1c3)},'async':![],'success':function(_0x54f30c){var _0x2676a8=_0x5583f5,_0x4617b0=_0x54f30c['d'][_0x2676a8(0x11f)];for(var _0x5e9fed=0x0;_0x5e9fed<_0x4617b0[_0x2676a8(0x1a9)];_0x5e9fed++){$('#ddlProgram')[_0x2676a8(0xd1)]($(_0x2676a8(0x1ac))[_0x2676a8(0x180)](_0x4617b0[_0x5e9fed]['Id'])[_0x2676a8(0x1bc)](_0x4617b0[_0x5e9fed][_0x2676a8(0x13f)]));}},'error':function(_0x416940){console['log'](_0x416940);}});}function clearSelection(){var _0x2588c3=a0_0x309488;$('#ddlCustomer')[_0x2588c3(0x180)](_0x2588c3(0x1c4)),$(_0x2588c3(0x16f))[_0x2588c3(0x180)](_0x2588c3(0x1c4)),$(_0x2588c3(0x1b9))[_0x2588c3(0x180)](_0x2588c3(0x1c4)),$('#ddlLocation')['val'](_0x2588c3(0x1c4)),clearPeoplePickerControl(_0x2588c3(0x146)),projectListItemArr=filterArr,BindProjectGrid();}function clearPeoplePickerControl(_0x4413fe){var _0x5db0db=a0_0x309488,_0x264fd8=_0x4413fe+_0x5db0db(0xd6),_0x254af3=null,_0x25d65a=this[_0x5db0db(0x1be)]['SPClientPeoplePickerDict'];for(var _0x75997c in _0x25d65a){if(_0x75997c==_0x264fd8){_0x254af3=_0x25d65a[_0x75997c];break;}}if(_0x254af3){var _0x2bedd1=$(document['getElementById'](_0x254af3[_0x5db0db(0x184)]))[_0x5db0db(0x14b)](_0x5db0db(0x17b));$(_0x2bedd1)[_0x5db0db(0x191)](function(_0x3b0e99){var _0x17e5aa=_0x5db0db;_0x254af3[_0x17e5aa(0x190)](this);});}}function getCurrentURL_GetProjectGridEvent(){var _0x1ccd50=a0_0x309488;$[_0x1ccd50(0x1a6)](BindDepartments())[_0x1ccd50(0x160)](function(){});}function BindDepartments(){var _0xbe0119=a0_0x309488,_0xcfd854=titanForWork[_0xbe0119(0xc7)](_0xbe0119(0x121)),_0x1cebd8=new SP['ClientContext'](),_0x1192fe=_0x1cebd8['get_web']()[_0xbe0119(0x126)]()[_0xbe0119(0x10f)](_0xbe0119(0x1ca)),_0x1ea372=new SP[(_0xbe0119(0x137))](),_0x35dac1=_0xbe0119(0x15f)+_0xcfd854+_0xbe0119(0x15e);_0x1ea372[_0xbe0119(0xdf)](_0x35dac1);var _0x4c3889=_0x1192fe[_0xbe0119(0x138)](_0x1ea372);_0x1cebd8['load'](_0x4c3889),_0x1cebd8[_0xbe0119(0x152)](function(){var _0x148204=_0xbe0119,_0x4bce6a=_0x4c3889[_0x148204(0x13d)](),_0x2d5eb7='<option\x20value=\x22All\x22>All</option>';while(_0x4bce6a[_0x148204(0xf9)]()){var _0x552e60=_0x4bce6a[_0x148204(0x189)](),_0x2e0d3f=_0x552e60[_0x148204(0xfb)]('ID'),_0x4b9305=_0x552e60[_0x148204(0xfb)](_0x148204(0x13f));_0x2d5eb7+=_0x148204(0x1ab)+_0x2e0d3f+'\x22>'+_0x4b9305+'</option>';}$(_0x148204(0x16f))['append'](_0x2d5eb7);},function(){console['log']('error\x20:\x20Project\x20Details\x20web\x20part');});}function initializePeoplePicker(_0x15be38){var _0x2b2947=a0_0x309488,_0x59fefe={};_0x59fefe[_0x2b2947(0x10c)]=_0x2b2947(0x156),_0x59fefe['SearchPrincipalSource']=0xf,_0x59fefe['ResolvePrincipalSource']=0xf,_0x59fefe[_0x2b2947(0x14e)]=![],_0x59fefe[_0x2b2947(0x12a)]=0x32,_0x59fefe[_0x2b2947(0x15b)]='245px',this[_0x2b2947(0xc5)](_0x15be38,null,_0x59fefe);}function getUserInformation(_0x46d4d1){var _0x325947=a0_0x309488,_0x2899f5=[],_0x477022=this[_0x325947(0x1be)][_0x325947(0x1a7)][_0x46d4d1+'_TopSpan'];if(!_0x477022['IsEmpty']()){if(_0x477022[_0x325947(0x193)])return![];else{if(!_0x477022[_0x325947(0xcd)]())return![];else{if(_0x477022['TotalUserCount']>0x0){var _0x5901e4=_0x477022[_0x325947(0x132)](),_0x4d603d='',_0x8ad0b4='',_0x23a503='';for(var _0x59a17f=0x0;_0x59a17f<_0x5901e4['length'];_0x59a17f++){var _0x28340d=_0x5901e4[_0x59a17f][_0x325947(0x1a3)][_0x325947(0x1c9)];DisplayText=_0x5901e4[_0x59a17f][_0x325947(0x10a)];var _0x29e7b2=_0x28340d;_0x29e7b2!=-0x1&&_0x2899f5['push'](_0x29e7b2);}return _0x2899f5;}}}}else return _0x23a503;}function filter(){var _0x3c1d3a=a0_0x309488;filterArr=projectListItemArr,$(_0x3c1d3a(0x185))[_0x3c1d3a(0x105)](function(){var _0x1bc7a6=_0x3c1d3a,_0x57250c='';projectListItemArr=filterArr;var _0x4f9022='';if($('#managerPicker_TopSpan_ResolvedList')[_0x1bc7a6(0x1bc)]()!=''){_0x4f9022=getUserInformation(_0x1bc7a6(0x146));if(_0x4f9022[_0x1bc7a6(0x1a9)]>0x1)return alert(_0x1bc7a6(0xe0)),![];}var _0x34e0f1=$(_0x1bc7a6(0x16f))[_0x1bc7a6(0x180)](),_0x46deef=$(_0x1bc7a6(0x163))[_0x1bc7a6(0x180)](),_0x3d1b18=$(_0x1bc7a6(0xdc))[_0x1bc7a6(0x180)](),_0x599bbe=$(_0x1bc7a6(0x1b9))[_0x1bc7a6(0x180)]();projectListItemArr=projectListItemArr[_0x1bc7a6(0x139)](function(_0x5204dc){var _0x5b3ee8=_0x1bc7a6,_0x49a476=$(_0x5b3ee8(0xe1))[_0x5b3ee8(0x180)]();return(_0x34e0f1==_0x5b3ee8(0x1c4)?_0x5204dc[_0x5b3ee8(0x18b)]!=_0x5b3ee8(0x123):_0x5204dc['Department_ID']==parseInt(_0x34e0f1))&&(_0x3d1b18==_0x5b3ee8(0x1c4)?_0x5204dc[_0x5b3ee8(0x107)]!=_0x5b3ee8(0x123):_0x5204dc[_0x5b3ee8(0x107)]==parseInt(_0x3d1b18))&&(_0x46deef==_0x5b3ee8(0x1c4)?_0x5204dc[_0x5b3ee8(0xd9)]!=_0x5b3ee8(0x123):_0x5204dc[_0x5b3ee8(0xd9)]==parseInt(_0x46deef))&&(_0x599bbe==_0x5b3ee8(0x1c4)?_0x5204dc[_0x5b3ee8(0x13b)]!='null':_0x5204dc[_0x5b3ee8(0x13b)]==parseInt(_0x599bbe))&&(_0x4f9022==''?_0x5204dc[_0x5b3ee8(0x1b1)]!='':_0x5204dc[_0x5b3ee8(0x1b1)]==_0x4f9022)&&(_0x49a476==''?_0x5204dc[_0x5b3ee8(0x197)]!='null':_0x5204dc[_0x5b3ee8(0x197)]==_0x49a476);}),BindProjectGrid();});}var sortProject=![],sortClient=![],sortManager=![];function sortProjectName(){var _0x28b763=a0_0x309488;sortProject==![]?(projectListItemArr[_0x28b763(0x1a2)](function(_0x5bdd3e,_0x1b26cf){var _0x3682e5=_0x28b763,_0x56a6c9=_0x5bdd3e[_0x3682e5(0xc6)][_0x3682e5(0xff)](),_0xf18995=_0x1b26cf[_0x3682e5(0xc6)][_0x3682e5(0xff)]();if(_0x56a6c9<_0xf18995)return-0x1;if(_0x56a6c9>_0xf18995)return 0x1;return 0x0;}),sortProject=!![]):(projectListItemArr[_0x28b763(0x1a2)](function(_0x13ffd0,_0xff5f4c){var _0x45dde2=_0x28b763,_0x43f7ab=_0x13ffd0[_0x45dde2(0xc6)]['toLowerCase'](),_0x367ef0=_0xff5f4c[_0x45dde2(0xc6)][_0x45dde2(0xff)]();if(_0x367ef0<_0x43f7ab)return-0x1;if(_0x367ef0>_0x43f7ab)return 0x1;return 0x0;}),sortProject=![]),BindProjectGrid();}function sortClientName(){var _0x5a1b4c=a0_0x309488;sortClient==![]?(projectListItemArr[_0x5a1b4c(0x1a2)](function(_0x942290,_0x3efcfa){var _0x4ea7a6=_0x5a1b4c,_0x548522=_0x942290[_0x4ea7a6(0xf2)]['toLowerCase'](),_0x5d2476=_0x3efcfa[_0x4ea7a6(0xf2)][_0x4ea7a6(0xff)]();if(_0x548522<_0x5d2476)return-0x1;if(_0x548522>_0x5d2476)return 0x1;return 0x0;}),sortClient=!![]):(projectListItemArr[_0x5a1b4c(0x1a2)](function(_0x1090e3,_0x574711){var _0x11938d=_0x5a1b4c,_0x271515=_0x1090e3[_0x11938d(0xf2)][_0x11938d(0xff)](),_0x51809b=_0x574711[_0x11938d(0xf2)]['toLowerCase']();if(_0x51809b<_0x271515)return-0x1;if(_0x51809b>_0x271515)return 0x1;return 0x0;}),sortClient=![]),BindProjectGrid();}function sortManagerName(){var _0x3f84cc=a0_0x309488;sortManager==![]?(projectListItemArr[_0x3f84cc(0x1a2)](function(_0x1fa717,_0x32c797){var _0x33a95f=_0x3f84cc,_0x27997b=_0x1fa717[_0x33a95f(0x17d)][_0x33a95f(0xff)](),_0x2d2e4f=_0x32c797[_0x33a95f(0x17d)][_0x33a95f(0xff)]();if(_0x27997b<_0x2d2e4f)return-0x1;if(_0x27997b>_0x2d2e4f)return 0x1;return 0x0;}),sortManager=!![]):(projectListItemArr[_0x3f84cc(0x1a2)](function(_0x5a2e60,_0x4e06b0){var _0x2b4530=_0x3f84cc,_0x3e2d8d=_0x5a2e60[_0x2b4530(0x17d)][_0x2b4530(0xff)](),_0x2e3d11=_0x4e06b0['ManagerName']['toLowerCase']();if(_0x2e3d11<_0x3e2d8d)return-0x1;if(_0x2e3d11>_0x3e2d8d)return 0x1;return 0x0;}),sortManager=![]),BindProjectGrid();}var LabelDefaultLangauge=[],labels=[];function a0_0x28ae(){var _0x2b1860=['405453yYxKTv','<div\x20class=\x22ref\x22>','AllowMultipleValues','ModalDialog','#mydmsNorecordFound','__next','executeQueryAsync','totalrecordsMyProject','protocol','nosort','User,DL','Multilingual\x20:\x20','<p\x20class=\x22m-0\x20font-12\x22>Date:<span>','</p>','showWaitScreenWithNoClose','Width','webAbsoluteUrl','sorter','</Value></Eq></Where><OrderBy><FieldRef\x20Name=\x27Title\x27/></OrderBy></Query></View>','<View><Query><Where><Eq><FieldRef\x20Name=\x27CompanyID\x27\x20/><Value\x20Type=\x27Lookup\x27>','done','/Pages/ProjectDetails.aspx?WebAppId=','\x27\x20class=\x27font-16\x20ellipsis-2\x27>','#ddlLocation','attr','\x27)/items/','Terminated','hide','/_api/web/lists/getbytitle(\x27','Live','<div\x20class=\x22progress\x20custom-progress\x20progress-success\x20m-0\x20mt-4\x22>','concat','value','[object\x20SafariRemoteNotification]','5000','#txtFilterDepartment','location','&ProjectID=','Modified','69912tMptaJ','evenrow','#hdnIsProjectAdmin','<a\x20class=\x27custom-edit-btn\x27\x20href=\x27','PlanedEndDate','formatDate','<div>','<h3\x20class=\x22member-name\x20text-ellipsis\x22>','span[class=\x27sp-peoplepicker-userSpan\x27]','<label\x20class=\x22lable-view-name\x22\x20data-localize=\x22Reference\x22>Reference:</label>','ManagerName','ActualEndDate1','getDate','val','<div\x20class=\x22d-flex\x20mt5\x22>','pushNotification','show','ResolvedListElementId','#btnApply','LabelsSettings','TechnologyUsed','labelText_Actual','get_current','button','Department_ID','/_api/web/Lists/getbytitle(\x27ClientMaster\x27)/Items?&$top=500&$filter=IsActive\x20eq\x20\x271\x27','Key','-Select-','<td\x20style=\x22text-align:center\x22>NorecordFound</td>','DeleteProcessedUser','each','\x27)/items?$select=*,Department/DepartmentName,Department/ID&$expand=Department&$filter=CompanyId\x20eq\x20\x27','HasInputError','siteServerRelativeUrl','3488FAHiMb','1708XfHTil','Status','#totalIcaon','ajax','ItemID','\x27><i\x20class=\x27fa\x20fa-pencil\x27></i></a>','#exceltable>tbody','<p\x20class=\x22m-0\x20mb-10\x22\x20style=\x22color:#ff0000\x22>Terminated</p>','PartnerName','href','#tablefooterMyProject','%;\x20background:#ff0000\x20!important\x22>','sort','EntityData','AllProject','push','when','SPClientPeoplePickerDict','ProjectCode','length','datepicker','<option\x20value=\x22','<option/>','userId','documentMode','CompletionPercentage','.myListPagingValue','ManagerEMail','format','<label\x20class=\x22lable-view-name\x22>Office:</label>','oddselected','oddrow','<p\x20class=\x22m-0\x20mb-10\x20color-green\x22>Completed</p>','OfficeLocation','totalpagesMyProject','#ddlProgram','undefined','<div\x20class=\x22progress-bar\x20progress-bar-info\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:','text','tablenavMyProject','SPClientPeoplePicker','</span></p>','ProgramName','resolve','host','application/json;odata=verbose','All','lableText_Converted','/Pages/ViewProjectDetails.aspx?WebAppId=','split','webServerRelativeUrl','Email','Departments','<td>','SPClientPeoplePicker_InitStandaloneControlWrapper','ProjectName','getQueryStringParameter','toString','719016obyVoQ','</h3>','<img\x20src=\x22','DepartmentName','HasResolvedUsers','\x20key\x20not\x20found.','#CreateProject','#__REQUESTDIGEST','append','ProgramList','tableExport','<div\x20class=\x22project-manager-card-body-info\x20text-ellipsis\x22>','promise','_TopSpan','PlanedEndDate1','<tr><td>','OfficeLocationId','256572GCNfgF','projectId','#ddlCustomer','<p\x20class=\x22m-0\x20font-12\x22\x20style=\x22color:#ff0000\x20!important\x22>Due\x20:<span>','#overlaysearch','set_viewXml','Please\x20enter\x20only\x20one\x20Manager','#txtFilterStatus','log','&ProjectName=','ProcessApprovers','table','responseJSON','<div\x20class=\x22progress\x20custom-progress\x20progress-warning\x20m-0\x20mt-4\x22>','selectedIndex','#btnCreateProgram','safari','/_layouts/15/userphoto.aspx?accountname=','head','9335BUjAEA','?$expand=ProgramID,Department_ID,ClientID,ManagerName,Office_Location_Id&$select=*,ProgramID/Title,ProgramID/Id,ManagerName/Title,ManagerName/EMail,ManagerName/Id,ClientID/Title,ClientID/Id,Department_ID/Title,Department_ID/Id,Office_Location_Id/Id,Office_Location_Id/Title&$top=5000','/_api/web/Lists/getbytitle(\x27OfficeLocation\x27)/Items?$filter=CompanyID\x20eq\x20\x27','Percentage','employeePicURL','ClientName','187sHECjA','#RecentProject','2OPAnYf','<div\x20class=\x22project-manager-card-head\x22>','Recommended\x20to\x20clear\x20the\x20browsing\x20data\x20and\x20cookies\x20for\x20smooth\x20and\x20fast\x20browsing.\x20Please\x20press\x20Ctrl\x20+\x20H\x20to\x20clear\x20cookies.','yyyy/MM/dd','moveNext','</td><td>','get_item','<div\x20class=\x22project-edit-lock-btn-box\x22>','Generating\x20excelsheet...','30SdKBLC','toLowerCase','setDate','#btnViewProgram','<div\x20class=\x22project-manager-card\x22>','[data-localize]','<div\x20class=\x22progress-bar\x20progress-bar-success\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:','click','reject','ClientID','currentpageMyProject','SOD','DisplayText','16615QScefq','PrincipalAccountType','PlanedStartDate','#ProjectExport','getByTitle','174HtdPMF','DefaultLanguage','/Pages/EditProjectDetails.aspx?WebAppId=','ActualStartDate','%\x22>','<td\x20class=\x22text-center\x22>','<p\x20class=\x22m-0\x20font-12\x22>Due\x20:<span>','ProjectId','close','ProjectDescription','startrecordMyProject','html','dd-M-yy','\x27\x20and\x20Department/ID\x20eq\x20\x27','toISOString','results','evenselected','CompanyId','Deferred','null','<div\x20class=\x22progress\x20custom-progress\x20progress-info\x20m-0\x20mt-4\x22>','</td>','get_lists','substring','Office_Location_Id','hasClass','MaximumEntitySuggestions','ProjectDetails','<div\x20class=\x22progress\x20custom-progress\x20progress-danger\x20m-0\x20mt-4\x22>','<div\x20class=\x22progress-bar\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:70%;\x20background:#000000ab\x22>','GET','Completed','#tableTempProjects>tbody','data-localize','GetAllUserInfo','tableTempProjects','<p\x20class=\x22m-0\x20font-12\x22>Due:<span>','<a\x20href=\x27','?$select=Title,Key,DefaultLanguage&$top=5000&$filter=Title\x20eq\x20\x27Project\x27\x20','CamlQuery','getItems','filter','</div>','ProgramID','ActualEndDate','getEnumerator','\x27\x20and\x20ContributorsId\x20eq\x20\x27','Title','fadeIn','HTMLElement','ClientMaster','test','<label\x20class=\x22lable-view-name\x22>Dept:</label>','<p\x20class=\x22m-0\x20mb-10\x20color-blue\x22>Live</p>','managerPicker','<div\x20class=\x22progress-bar\x22\x20role=\x22progressbar\x22\x20aria-valuenow=\x2240\x22\x20aria-valuemin=\x220\x22\x20aria-valuemax=\x22100\x22\x20style=\x22width:','<br\x20/>Please\x20wait!!','\x27\x20and\x20(WebPartName\x20eq\x20\x27Project\x27)','<p\x20class=\x22m-0\x20mb-10\x20color-green\x22>Completed<span\x20style=\x22color:#ff0000\x20!important\x22>(Late)</span></p>','find'];a0_0x28ae=function(){return _0x2b1860;};return a0_0x28ae();}function ChangeLabels(){var _0x5084d8=a0_0x309488,_0x5022af='DefaultLanguage';if(LabelDefaultLangauge[_0x5084d8(0x1a9)]==0x0){var _0x2da2dd=_0x5084d8(0x136);$[_0x5084d8(0x1a6)](CommonFunction['getItemsWithQueryItem'](_0x5084d8(0x186),_0x2da2dd))[_0x5084d8(0x160)](function(_0x5eab49){var _0x1b2d6b=_0x5084d8;try{LabelDefaultLangauge=_0x5eab49[_0x1b2d6b(0x11f)],SetDMSText(_0x5eab49[_0x1b2d6b(0x11f)],_0x5022af);}catch(_0x5d1865){alert(_0x1b2d6b(0xf7));}});}else SetDMSText(LabelDefaultLangauge,_0x5022af);}function SetDMSText(_0x4a8774,_0x3218de){labels=[],$['each'](_0x4a8774,function(_0x234b32,_0x2a947f){var _0x518c2f=a0_0x1d21,_0x5ea14a=_0x2a947f[_0x518c2f(0x18d)],_0x193ec5=_0x2a947f[_0x3218de];if(_0x193ec5==null||_0x193ec5==''||_0x193ec5==undefined)_0x193ec5=_0x2a947f[_0x518c2f(0x111)];var _0x3430de={'labelText_Actual':_0x5ea14a,'lableText_Converted':_0x193ec5};labels[_0x518c2f(0x1a5)](_0x3430de);}),DetectBrowser();}function DetectBrowser(){var _0x28a631=a0_0x309488,_0x39d634=/constructor/i[_0x28a631(0x143)](window[_0x28a631(0x141)])||function(_0x561996){var _0x42e4b3=_0x28a631;return _0x561996[_0x42e4b3(0xc8)]()===_0x42e4b3(0x16d);}(!window[_0x28a631(0xea)]||typeof safari!==_0x28a631(0x1ba)&&safari[_0x28a631(0x182)]),_0x1a7294=![]||!!document[_0x28a631(0x1ae)];_0x39d634||_0x1a7294?ChangeWebPartsHeadings_OldBrowser():ChangeWebPartsHeadings();}function ChangeWebPartsHeadings(){var _0x2ba791=a0_0x309488;try{$(_0x2ba791(0x103))[_0x2ba791(0x191)](function(_0x2967fb,_0x470b60){var _0x55cdd6=_0x2ba791;try{var _0x23c68c=$(this)[_0x55cdd6(0x164)]('data-localize'),_0x12bf95=labels[_0x55cdd6(0x14b)](function(_0x1a9f88){return _0x1a9f88['labelText_Actual']['trim']()===_0x23c68c;})[_0x55cdd6(0x1c5)];if($(this)['find']('a')[_0x55cdd6(0x1a9)]>0x0)$(this)[_0x55cdd6(0x14b)]('a')[_0x55cdd6(0x11b)](_0x12bf95);else{if($(this)[_0x55cdd6(0x14b)]('b')[_0x55cdd6(0x1a9)]>0x0)$(this)['find']('b')[_0x55cdd6(0x11b)](_0x12bf95);else{if($(this)[_0x55cdd6(0x14b)]('p')['length']>0x0)$(this)['find']('p')['html'](_0x12bf95);else $(this)[_0x55cdd6(0x129)](_0x55cdd6(0x18a))?$(this)[_0x55cdd6(0x164)](_0x55cdd6(0x16c),_0x12bf95):$(this)[_0x55cdd6(0x11b)](_0x12bf95);}}}catch(_0x2742de){console[_0x55cdd6(0xe2)](_0x55cdd6(0x157)+_0x23c68c+_0x55cdd6(0xce)),$(this)[_0x55cdd6(0x164)](_0x55cdd6(0x16c),$(this)['val']());}});}catch(_0x25eb2b){console[_0x2ba791(0xe2)](_0x2ba791(0x157)+_0x25eb2b);}}function ChangeWebPartsHeadings_OldBrowser(){var _0x2b11ba=a0_0x309488;try{$('[data-localize]')['each'](function(_0x8c2111,_0x48426e){var _0x5bf24e=a0_0x1d21;try{var _0x3fc1ab=$(this)['attr'](_0x5bf24e(0x131)),_0x48efab=findObjectByKey(labels,_0x3fc1ab,_0x3fc1ab);if($(this)[_0x5bf24e(0x14b)]('a')[_0x5bf24e(0x1a9)]>0x0)$(this)['find']('a')['html'](_0x48efab);else{if($(this)['find']('b')[_0x5bf24e(0x1a9)]>0x0)$(this)['find']('b')[_0x5bf24e(0x11b)](_0x48efab);else{if($(this)[_0x5bf24e(0x14b)]('p')[_0x5bf24e(0x1a9)]>0x0)$(this)[_0x5bf24e(0x14b)]('p')[_0x5bf24e(0x11b)](_0x48efab);else $(this)[_0x5bf24e(0x129)](_0x5bf24e(0x18a))?_0x48efab!=null&&_0x48efab!=_0x5bf24e(0x123)&&_0x48efab!=''?$(this)['attr'](_0x5bf24e(0x16c),_0x48efab):$(this)[_0x5bf24e(0x164)](_0x5bf24e(0x16c),$(this)[_0x5bf24e(0x180)]()):_0x48efab!=null&&_0x48efab!='null'&&_0x48efab!=''?$(this)[_0x5bf24e(0x11b)](_0x48efab):$(this)[_0x5bf24e(0x11b)]($(this)[_0x5bf24e(0x1bc)]());}}}catch(_0x2664da){console['log'](_0x5bf24e(0x157)+_0x3fc1ab+'\x20key\x20not\x20found.'),$(this)[_0x5bf24e(0x164)](_0x5bf24e(0x16c),$(this)['val']());}});}catch(_0x10ba18){console[_0x2b11ba(0xe2)](_0x2b11ba(0x157)+_0x10ba18);}}function findObjectByKey(_0x218f1d,_0x1f0b90,_0xb49fbf){var _0x519c1d=a0_0x309488;for(var _0x1b35bf=0x0;_0x1b35bf<_0x218f1d[_0x519c1d(0x1a9)];_0x1b35bf++){if(_0x218f1d[_0x1b35bf][_0x519c1d(0x188)]==_0xb49fbf)return _0x218f1d[_0x1b35bf][_0x519c1d(0x1c5)];}return null;}