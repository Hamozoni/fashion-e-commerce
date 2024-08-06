const now = new Date()

export const ordersStatusFilterDates = [
    {
        name: 'week',
        date: new Date(now.getFullYear(),now.getMonth(),now.getDay() - 7)
    },
    {
        name: 'month',
        date: new Date(now.getFullYear(),now.getMonth() - 1,now.getDay())
    },
    {
        name: 'year',
        date: new Date(now.getFullYear() - 1,now.getMonth(),now.getDay())
    }
]

export const revenueFilterDates = [
    {
        name: 'month',
        date:[
            { 
                name: 'first quarter',
                date : new Date(now.getFullYear(),now.getMonth(),now.getDay() - 7),
            },
            {
                name : 'second quarter',
                date : new Date(now.getFullYear(),now.getMonth(),now.getDay() - 14),
            },
            {
                name: 'thirs quarter',
                date : new Date(now.getFullYear(),now.getMonth(),now.getDay() - 21),
            },
            {
                name: 'fourth quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 1,now.getDay()),
            }
        ]
    },
    {
        name: '4 month',
        date:[

            { 
                name: 'first quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 1,now.getDay()),
            },
            {
                name : 'second quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 2,now.getDay()),
            },
            {
                name: 'thirs quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 3,now.getDay()),
            },
            {
                name: 'fourth quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 4,now.getDay()),
            }
        ]
    },
    {
        name: '8 month',
        date:[

            { 
                name: 'first quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 2,now.getDay()),
            },
            {
                name : 'second quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 4,now.getDay()),
            },
            {
                name: 'thirs quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 6,now.getDay()),
            },
            {
                name: 'fourth quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 8,now.getDay()),
            }
        ]
    },
    {
        name: 'year',
        date:[

            { 
                name: 'first quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 3,now.getDay()),
            },
            {
                name : 'second quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 6,now.getDay()),
            },
            {
                name: 'thirs quarter',
                date : new Date(now.getFullYear(),now.getMonth() - 9,now.getDay()),
            },
            {
                name: 'fourth quarter',
                date :  new Date(now.getFullYear() - 1,now.getMonth(),now.getDay()),
            }
        ]
    }
]