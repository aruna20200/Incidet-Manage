sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/app/employeefiorielements/test/integration/FirstJourney',
		'com/app/employeefiorielements/test/integration/pages/EmployeeList',
		'com/app/employeefiorielements/test/integration/pages/EmployeeObjectPage',
		'com/app/employeefiorielements/test/integration/pages/AddressObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeList, EmployeeObjectPage, AddressObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/app/employeefiorielements') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeList: EmployeeList,
					onTheEmployeeObjectPage: EmployeeObjectPage,
					onTheAddressObjectPage: AddressObjectPage
                }
            },
            opaJourney.run
        );
    }
);