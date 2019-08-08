export const COLUMNS = [
    {
        title: 'Vote Number',
        field: '_id',
        defaultSort: 'desc',
        headerStyle: {padding: '1px'},
        cellStyle: {fontFamily: 'Fact-Expanded'}
    },
    {
        title: 'Date',
        field: 'voteDate',
        type: 'date',
        cellStyle: {
            fontFamily: 'Fact-Expanded',
            fontSize: '0.65em'
        }
    },
    {
        title: 'Agenda',
        field: 'agendaDescription',
        cellStyle: {
            fontFamily: 'Fact-Expanded',
            fontSize: '0.65em'
        }
    },
    {
        title: 'Decision',
        field: 'decision',
        headerStyle: {padding: '1px'},
        cellStyle: {fontFamily: 'Fact-Expanded'}
    },
    {
        title: 'Tags',
        field: 'tags',
        cellStyle: {fontFamily: 'Fact-Expanded'}
    }
];

export const OPTIONS = {
    pageSizeOptions: [5, 10, 20, 50, 100],
    selection: true,
    filtering: true,
    sorting: true,
    exportButton: true,
    headerStyle: {
        fontFamily: 'Fact-ExpandedMedium',
        backgroundColor: '#009245',
        color: '#FFF'
    },
};
