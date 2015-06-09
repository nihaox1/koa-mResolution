/**
 *  Created by bo.cheng on 2015/5/20.
 *  获取手机设备对应字体、分辨率
 */
module.exports = function(){
    var _hash           = [
            {
                names       : [ "SM-N900T" , "iPhoneOS8_0" ] ,
                dpr         : 3 ,
                resolution  : 960 ,
                fontSize    : 75
            } ,
            {
                names       : [ "iPhoneOS4_2_1" , "iPhoneOS7_0" , "Nexus4" ] ,
                dpr         : 2 ,
                resolution  : 640 ,
                fontSize    : 40
            } ,
            {
                names       : [ "HTCOneX" ] ,
                dpr         : 1 ,
                resolution  : 320 ,
                fontSize    : 20
            }
        ];
    return function *( next ){
        var _userAgent      = this.accept.headers[ "user-agent" ] ,
            i , k , _rtn;
        if( _userAgent.indexOf( "Android" ) > -1 || _userAgent.indexOf( "iPhone" ) > -1 || _userAgent.indexOf( "Windows Phone" ) > -1 ){
            for( i = _hash.length; i--; ){
                for( k = _hash[ i ].names.length; k--; ){
                    if( _userAgent.indexOf( _hash[ i ].names[ k ] ) > -1 ){
                        _rtn    = {
                            resolution  : _hash[ i ].resolution ,
                            fontSize    : _hash[ i ].fontSize ,
                            dpr         : _hash[ i ].dpr
                        }
                        break;
                    }
                }
                if( _rtn ){
                    break;
                }
            }
            _rtn    = _rtn || {
                    resolution  : 640 ,
                    fontSize    : 40 ,
                    dpr         : 2
                }
        }
        this.req.client.mResolution    = _rtn || {
                resolution  : "100%" ,
                fontSize    : 12
            }
        yield next;
    };
};