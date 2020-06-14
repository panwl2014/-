/* 拒绝服务攻击监测情况 */

function data_dos(){
    const colorList = ['#47A2FF ', '#53C8D1', '#59CB74', '#FBD444', '#7F6AAD', '#585247'];
    const dos_data = [{name:'色情',value:100},{name:'博彩',value:100},{name:'文化',value:100},{name:'体育',value:100},{name:'娱乐',value:100},{name:'金融',value:100},{name:'教育',value:100}]
    option = {
        title: {
            text: '受攻击\n目标分\n布领域',
            x: '11.5%',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: "#7B949B",
            }
        },
        tooltip: {
            trigger: 'item',
        },
        legend: [
            {
                type: 'scroll',
                orient: 'vertical',
                left: '40%',
                top: 'center',
                itemGap: 10,
                itemWidth: 15,
                itemHeight: 5,
                selectedMode: false,
                
                icon: 'pin',
                textStyle: {
                    color: '#7B949B',
                    
                    rich: {
                        uname: {
                            width: 35,
                            fontSize: 14,
                        },
                        unum: {
                            color: '#7B949B',
                            
                            width: 50,
                            align: 'right'
                        }
                    }
                },
                data: dos_data.slice(0,4),
                formatter(name) {
                    const data = option.series[0].data;
                    let percent = 0;
                    let current_nums = 0;
                    let allnums = 0;
                    for(let i=0;i<data.length;i++){
                        allnums += data[i].value;
                        if(name == data[i].name){
                            current_nums = data[i].value;
                        }
                        
                    }
                    percent = ((current_nums/allnums)*100).toFixed(2);
                    percent = percent + "%";
                    
    
                    return `{uname|${name}}{unum|${percent}}`
                }
            },
            {
                type: 'scroll',
                orient: 'vertical',
                left: '70%',
                top: 'center',
                itemGap: 10,
                itemWidth: 15,
                itemHeight: 5,
                selectedMode: false,
                icon: 'pin',
                textStyle: {
                    color: '#7B949B',
                    
                    rich: {
                        uname: {
                            width: 35,
                            fontSize: 14,
                        },
                        unum: {
                            color: '#7B949B',
                            
                            width: 50,
                            align: 'right'
                        }
                    }
                },
                data: dos_data.slice(4,8),
                formatter(name) {
                    const data = option.series[0].data;
                    let percent = 0;
                    let current_nums = 0;
                    let allnums = 0;
                    for(let i=0;i<data.length;i++){
                        allnums += data[i].value;
                        if(name == data[i].name){
                            current_nums = data[i].value;
                        }
                        
                    }
                    percent = ((current_nums/allnums)*100).toFixed(2);
                    percent = percent + "%";
                    
    
                    return `{uname|${name}}{unum|${percent}}`
                }
            },
            
        ],
        color: colorList,
        series: [
            {
                name: '姓名',
                type: 'pie',
                radius: [40, 60],
                center: ['20%', '50%'],
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    borderWidth: 3,
                    borderColor: '#04111F'
                },
                data: dos_data
            }
        ]
    };

    const myChart = echarts.init(document.getElementById('dos-attack'));
    myChart.setOption(option);
    window.addEventListener("resize",function(){
    	resizeTimer = setTimeout(function(){
    		myChart.resize();
    	},400);
        
    });
}

function data_dos_line(){
    var fontColor = '#35FFB6';
    option ={
            title: {
                text: "受攻击目标IP地址数",
                x: '3%',
                textStyle: {
                    fontSize: 14,
                    color: '#5D8082',
                }
            },
            grid: {
                left: '3%',
                right: '5%',
                top:'25%',
                bottom: '5%',
                containLabel: true
            },
            tooltip : {
                show: true,
                trigger: 'item'
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLabel:{
                        color: '#233441'
                    },
                    axisLine:{
                           show:true,
                           lineStyle:{
                            color:'#233441'
                        }
                    },
                    axisTick:{
                        show:false,
                    },  
                    splitLine:{
                        show:false,
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '',
                    min:0,
                    max:1000,
                    axisLabel : {
                        formatter: '',
                        textStyle:{
                            color:'#233441'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#20313D'
                        }
                    },
                    axisTick:{
                        show:false,
                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:'#20313D'
                        }
                    }
                },
                
            ],
            series : [
                {
                    name:'已采纳',
                    type:'line',
                    stack: '总量',
                    symbol:'circle',
                    smooth: true,
                    symbolSize: 3,
                    itemStyle: {
                        normal: {
                            color:'#0092f6',
                            lineStyle: {
                                color: "#1D5C54",
                                width:1
                            },
                        }
                    },
                    markPoint:{
                        itemStyle:{
                            normal:{
                                color:'red'
                            }
                        }
                    },
                    data:[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
                },
                {
                    name:'已发布',
                    type:'line',
                    stack: '总量',
                    smooth: true,
                    symbol:'circle',
                    symbolSize: 3,
                    
                    itemStyle: {
                        normal: {
                            color:'#00d4c7',
                            lineStyle: {
                                color: "#1C4146",
                                width:1
                            },
                        }
                    },
                    data:[220, 182, 191, 234, 290, 330, 310,201, 154, 190, 330, 410]
                },
                
            ]
        };
    const myChart = echarts.init(document.getElementById('dos-attack-line'));
    myChart.setOption(option);
    window.addEventListener("resize",function(){
    	resizeTimer = setTimeout(function(){
    		myChart.resize();
    	},400);
        
    });
}


data_dos()
data_dos_line()