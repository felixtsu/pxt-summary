// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
summary.setUpSummaryScene("我的名字", img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 1 1 1 1 1 1 1 1 1 1 . . .
    . . 1 4 4 4 4 4 4 4 4 4 1 . . .
    . 1 5 4 4 4 4 4 4 4 4 4 1 . . .
    1 5 5 4 4 f f 4 4 1 1 1 1 1 1 1
    5 5 5 4 4 f f 4 4 5 5 5 5 5 5 .
    . . . 4 4 4 4 4 4 5 5 5 5 5 . .
    . . . 4 4 4 4 4 4 5 5 5 5 . . .
    . . . 4 4 4 4 4 4 5 5 5 1 . . .
    . . . 4 4 4 4 4 4 5 5 4 1 . . .
    . . . 4 4 4 4 4 4 5 4 4 1 . . .
    . . . 9 9 9 7 7 7 7 7 7 1 . . .
    . . . . 9 9 7 7 7 7 7 7 1 . . .
    . . . . . 9 7 7 7 7 7 7 1 . . .
    . . . . . . . . . . . . . . . .
`)
summary.textUp([
    {
        line:'line 1',
        isCorrect:false,
        oneline:false
    },
    {
        line:'line 2',
        isCorrect:true,
        oneline:false
    },
    {
        line:'line 3',
        isCorrect:true,
        oneline:false
    },
    {
        line:'line 4',
        isCorrect:false,
        oneline:false
    },
    {
        line:'line 5',
        isCorrect:false,
        oneline:true
    },
    {
        line:'line 6',
        isCorrect:false,
        oneline:true
    },
])