const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"景点分类","menuJump":"列表","tableName":"jingdianfenlei"}],"menu":"景点分类管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"旅游景点","menuJump":"列表","tableName":"lvyoujingdian"}],"menu":"旅游景点管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"景点购票","menuJump":"列表","tableName":"jingdiangoupiao"}],"menu":"景点购票管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"景区活动","menuJump":"列表","tableName":"jingquhuodong"}],"menu":"景区活动管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"旅游资讯","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"旅游景点列表","menuJump":"列表","tableName":"lvyoujingdian"}],"menu":"旅游景点模块"},{"child":[{"buttons":["查看"],"menu":"景区活动列表","menuJump":"列表","tableName":"jingquhuodong"}],"menu":"景区活动模块"},{"child":[{"buttons":["查看"],"menu":"旅游资讯列表","tableName":"news"}],"menu":"旅游资讯模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","购票"],"menu":"旅游景点","menuJump":"列表","tableName":"lvyoujingdian"}],"menu":"旅游景点管理"},{"child":[{"buttons":["查看","删除","支付"],"menu":"景点购票","menuJump":"列表","tableName":"jingdiangoupiao"}],"menu":"景点购票管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"旅游景点列表","menuJump":"列表","tableName":"lvyoujingdian"}],"menu":"旅游景点模块"},{"child":[{"buttons":["查看"],"menu":"景区活动列表","menuJump":"列表","tableName":"jingquhuodong"}],"menu":"景区活动模块"},{"child":[{"buttons":["查看"],"menu":"旅游资讯列表","tableName":"news"}],"menu":"旅游资讯模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;