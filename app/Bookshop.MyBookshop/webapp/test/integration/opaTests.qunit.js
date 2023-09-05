sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Bookshop/MyBookshop/test/integration/FirstJourney',
		'Bookshop/MyBookshop/test/integration/pages/BooksList',
		'Bookshop/MyBookshop/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Bookshop/MyBookshop') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);