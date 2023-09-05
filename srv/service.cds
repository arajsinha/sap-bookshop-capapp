using { Bookshop as my } from '../db/schema';

using Bookshop from '../db/schema';

@path : '/service/Bookshop'
service BookshopService
{
    @odata.draft.enabled
    entity Books as
        projection on my.Books;
}

annotate BookshopService with @requires :
[
    'authenticated-user'
];
