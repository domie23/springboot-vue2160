const base = {
    get() {
        return {
            url : "http://localhost:8080/chongwujiankangguwen/",
            name: "chongwujiankangguwen",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chongwujiankangguwen/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宠物健康顾问系统"
        } 
    }
}
export default base
