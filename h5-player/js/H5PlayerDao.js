    /**
     * 根据课件 code 查询章节
     *
     * @param  catalog   课件章节
     * @param  {Function} callback 请求成功的回调函数，参数为课件的数组
     * @return 无返回值
     */
    function findCatalogByCoursewareCode(catalog, callback) {
        $.rest.syncGet({ url: Urls.API_CATALOGS, data:catalog, success: function(result) {
            if (result.success) {
                var catalogs = result.data;
                callback(catalogs);
            } else {
                Utils.warning('查询课件章节错误', result.message);
            }
        },
        });
    }

        /**
     * 根据课件 code 查询课件
     *
     * @param  code   课件 code
     * @param  {Function} callback 请求成功的回调函数，参数为课件的数组
     * @return 无返回值
     */
    function findCoursewareByCode(code, callback) {
        $.rest.syncGet({ url: Urls.API_COURSEWARES_FINDCWBYCODE, pathVariables: { code }, success: (result) => {
            if (result.success) {
                const courseware = result.data;
                callback(courseware);
            } else {
                Utils.warning('根据code查询课件错误', result.message);
            }
        },
        });
    }

    /**
     * 根据课件编码和章节 ID 及媒体 ID 获取讲义/知识点/弹题列表
     *
     * @Param: catalogId           // 章节 ID
     * @param  {Function} callback 请求成功的回调函数，参数为试题的数组
     * @return 无返回值
     */
    function findLecturesMediaKnowledgePointsQuestions(catalogId, callback) {
        $.rest.syncGet({ url: Urls.API_COURSEWARE_CATALOG_MEDIA, pathVariables: { catalogId }, success: (result) => {
            if (result.success) {
                const catalog = result.data;
                callback(catalog);
            } else {
                Utils.warning('获取讲义、知识点、弹题列表错误', result.message);
            }
        }, });
    }

    /*
     * 通过媒体编码及服务器编码获取媒体时长及认证信息
     *
     * @Param: code       // 服务器编码
     * @param  {Function} callback 请求成功的回调函数，参数为试题的数组
     * @return 无返回值
     */

    function findServerType(code, callback) {
        $.rest.syncGet({ url: Urls.API_MEDIA_SERVERTYPE, pathVariables:  { code }, success: (result) => {
            if (result.success) {
                const serverTypeInfo = result.data;
                callback(serverTypeInfo);
            } else {
                Utils.warning('获取当前服务器信息有误', result.message);
            }
        }, });
    }

    /*
     * 通过媒体编码及服务器编码获取媒体时长及认证信息
     *
     * @Param: mediaSource        // 阿里云视频编码
     * @Param: serverCode         // 服务器编码
     * @param  {Function} callback 请求成功的回调函数，参数为试题的数组
     * @return 无返回值
     */
    function findPlayAuth(mediaSource, serverCode, callback) {
        $.rest.syncGet({ url: Urls.API_MEDIA_PLAYAUTH, data: { mediaSource, serverCode }, success: (result) => {
            if (result.success) {
                const auth = result.data;
                callback(auth);
            } else {
                Utils.warning('获取认证信息错误', result.message);
            }
        }, });
    }