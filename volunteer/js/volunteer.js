// Comments: volunteer JavaScript Functions
// File Location:
// \\Computer\c:\users\rwoods\jtec-cfh\web-site\volunteer\js\volunteer.js
// \\cfhserver.cfh.lan\Redirected$\rwoods\My Documents\Volunteers\volunteer.js
// Dec18,18 JL Original Version
// Jan07,19 JL Revised Version

function Tab(pspaceCount)
  {
  var spaceCount;

  if (pspaceCount > 0 && pspaceCount <= 8){
     spaceCount = pspaceCount;
     }
  else {
     spaceCount = 4;
     }
   
  // alert ("Test");

  for (var i = 0; i < spaceCount; i++) {
     // document.write("a");
     document.write('&nbsp;');
     }
  }
