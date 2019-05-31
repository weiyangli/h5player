var BasePath = "http://cws.edu-edu.com";
var Urls = {
    API_CATALOGS: BasePath + '/api/catalogs',                  // 查询/新增/更新章节目录
    API_COURSEWARES_FINDCWBYCODE: BasePath + '/api/coursewares/{code}/findCwByCode',  // 根据课件 CODE 查询单条记录
    API_COURSEWARE_CATALOG_MEDIA : BasePath + '/api/findinfo/coursewares/{catalogId}', // 获取媒体所有讲义/知识点/弹题信息
    API_MEDIA_SERVERTYPE : BasePath + '/api/servers/code/{code}',   //判断视频是否为阿里云，系统获取视频时长
    API_MEDIA_PLAYAUTH : BasePath + '/api/media/durationAndPlayAuth',
};
