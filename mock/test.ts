export default [
  {
    url: "/rest/report/project/list",
    method: "GET",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: [
          {
            createTime: "2021-12-06 09:30:33",
            dele: 0,
            id: 7,
            image: "",
            name: "建筑学院3",
            projectCode: "JianZhuXueYuan3",
          },
          {
            createTime: "2021-12-06 09:30:33",
            dele: 0,
            id: 9,
            image: "",
            name: "一技师",
            projectCode: "yijishi",
          },
          {
            createTime: "2021-12-06 09:30:33",
            dele: 0,
            id: 9,
            image: "",
            name: "测试",
            projectCode: "ceshi",
          },
        ],
      };
    },
  },
  {
    url: "/rest/report/project",
    method: "GET",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: {
          createTime: "2021-12-22 14:38:49",
          creator: null,
          dele: 0,
          id: 9,
          image: "",
          name: "一技师",
          projectCode: "yijishi",
          updator: null,
        },
      };
    },
  },
  {
    url: "/rest/report/page/list",
    method: "GET",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: [
          {
            code: '{"layouts":[{"layout":"rowFrame","type":"canvas","style":{"flexDirection":"column","display":"flex","width":"1920px","height":"1080px","backgroundColor":"rgba(10, 35, 39, 1)"},"children":[{"layout":"title","label":"标题","type":"title","text":"","style":{"flexDirection":"row","display":"flex","width":"100%","height":116,"justifyContent":"center","alignItems":"center","color":"#b4d6d6","fontSize":12,"fontFamily":"PingFangSC-Medium","backgroundImage":"tatle.png","backgroundGroup":"","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[],"formId":21,"renderKey":"211640158054649","componentName":"row21"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":0,"flex":1,"backgroundColor":"","backgroundImage":"back.png","backgroundGroup":"yjs-home","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[{"layout":"rowFrame","type":"container","style":{"flexDirection":"row","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"","backgroundGroup":"","marginTop":0,"marginBottom":30,"marginLeft":30,"marginRight":30},"children":[{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":520,"backgroundColor":"","backgroundImage":"","backgroundGroup":"","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"xssj.png","backgroundGroup":"yjs-home","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[],"formId":25,"renderKey":"251640158054649","componentName":"row25"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"bqzs.png","backgroundGroup":"yjs-home","marginTop":20,"marginBottom":20,"marginLeft":0,"marginRight":0},"children":[],"formId":26,"renderKey":"261640158054649","componentName":"row26"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"row","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"","backgroundGroup":"","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"gyxxsqk.png","backgroundGroup":"yjs-home","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":17},"children":[],"formId":28,"renderKey":"281640158054649","componentName":"row28"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"xsxbnnfb.png","backgroundGroup":"yjs-home","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[],"formId":29,"renderKey":"291640158054649","componentName":"row29"}],"formId":27,"renderKey":"271640158054649","componentName":"row27"}],"formId":24,"renderKey":"241640158054649","componentName":"row24"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":769,"backgroundColor":"","backgroundImage":"","backgroundGroup":"","marginTop":0,"marginBottom":0,"marginLeft":27,"marginRight":27},"children":[{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":616,"backgroundColor":"","backgroundImage":"xssyqk.png","backgroundGroup":"yjs-home","marginTop":0,"marginBottom":20,"marginLeft":0,"marginRight":0},"children":[{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"map.png","backgroundGroup":"yjs-home","marginTop":40,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[],"formId":39,"renderKey":"391640158071589","componentName":"row39"}],"formId":31,"renderKey":"311640158054649","componentName":"row31"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":298,"backgroundColor":"","backgroundImage":"bxgm.png","backgroundGroup":"yjs-home","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[],"formId":32,"renderKey":"321640158054649","componentName":"row32"}],"formId":30,"renderKey":"301640158054649","componentName":"row30"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":520,"backgroundColor":"","backgroundImage":"","backgroundGroup":"","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"szjg.png","backgroundGroup":"yjs-home","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[],"formId":34,"renderKey":"341640158054649","componentName":"row34"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"jsxlfx.png","backgroundGroup":"yjs-home","marginTop":20,"marginBottom":20,"marginLeft":0,"marginRight":0},"children":[],"formId":35,"renderKey":"351640158054649","componentName":"row35"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"row","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"","backgroundGroup":"","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"jsyxfb.png","backgroundGroup":"yjs-home","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":17},"children":[],"formId":37,"renderKey":"371640158054649","componentName":"row37"},{"layout":"rowFrame","type":"container","style":{"flexDirection":"column","display":"flex","padding":10,"flex":2,"backgroundColor":"","backgroundImage":"rmkc.png","backgroundGroup":"yjs-home","marginTop":0,"marginBottom":0,"marginLeft":0,"marginRight":0},"children":[],"formId":38,"renderKey":"381640158054649","componentName":"row38"}],"formId":36,"renderKey":"361640158054649","componentName":"row36"}],"formId":33,"renderKey":"331640158054649","componentName":"row33"}],"formId":23,"renderKey":"231640158054649","componentName":"row23"}],"formId":22,"renderKey":"221640158054649","componentName":"row22"}],"formId":20,"renderKey":"201640158054649","componentName":"row20","theme":""}],"conf":{"span":24,"gutter":10,"flexDirection":"row","theme":""}}',
            createTime: "2021-12-22 15:28:19",
            creator: null,
            dele: 0,
            id: 21,
            image: "",
            name: "首页",
            projectCode: "yijishi",
            updator: null,
          },
        ],
      };
    },
  },
];
