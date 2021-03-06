/**
 * Created by Administrator on 2017/2/22 0022.
 */
function getTransform(JsonUrl){

var myChart = echarts.init(document.getElementById('transform_diagram'));
myChart.showLoading();
$.get(JsonUrl, function (datas) {
    myChart.hideLoading();
    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'

        },
        color:['#1FAB89','#834496', '#D53939', '#07689F', '#2C9E4B','#FF5656',  '#B74242', '#F0D43A','#FFF200', '#015668', '#C190F0'],
        textStyle:{
            fontWeight:'bold',
            fontSize:24,
        },
        series: [
            {
                type: 'sankey',
                layout:'none',
                data: datas.nodes,
                links: datas.links,
                itemStyle: {
                    normal: {
                        borderWidth: 0.1,
                        borderColor: '#DFD1D1'
                    }
                },
                lineStyle: {
                    normal: {
                        color:'#FF9966',
                        curveness: 0.5
                    },
                    emphasis:{
                      color:'#FF3300'
                    }
                }
            }
        ]
    });
});

}
