const path = require('path');
const webpack=require('webpack');

module.exports ={
    mode : 'development',

    entry : {
        main : path.resolve('./src/app.js') //path 모듈 쓰면 운영체제 별로 경로설정 방법이  달라도 통일해줌
    },

    output : {
        filename : '[name].js', //entry 의 파일이름이 들어옴 
        path : path.resolve('./dist')
    },
    
    module : {
        rules : [
            {
                test : /\.js$/,
                use : [
                    path.resolve('./myLoader.js')
                ]
            },
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
            
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset', //inline 해주면 서버 컴퓨터에 요청없이 직접 그리게 되면서 렌더링 속도 빨라짐
                parser: {
                    dataUrlCondition: {
                        maxSize: 20* 1024

                    }
                },
            },
        ]
    },
    plugins:[
        new webpack.BannerPlugin({
            banner: '배너입니다'+ new Date().toLocaleString()
        }

        )
    ]
}