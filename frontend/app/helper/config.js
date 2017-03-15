//
//output
var data = {};
const _info = window.config || {};

data.ROOT = _info.root;
data.HOME = _info.home;
data.STATIC_ROOT = _info.staticRoot;
data.FEATURED_TAG = _info.featuredTag;
data.IS_LOCALSHOT = data.ROOT === '';

data.URL_LOGIN = data.IS_LOCALSHOT ? 'res/posts.json' : data.ROOT + '?controller=auth&action=login';
data.URL_LOGOUT = data.IS_LOCALSHOT ? 'res/posts.json' : data.ROOT + '?controller=auth&action=logout';
data.URL_GET_USER_EXPENSE = data.IS_LOCALSHOT ? 'res/posts.json' : data.ROOT + '?controller=expense&action=get_by_user';
data.URL_GET_ADMIN_EXPENSE = data.IS_LOCALSHOT ? 'res/posts.json' : data.ROOT + '?controller=expense&action=get_by_admin';
data.URL_ADD_EXPENSE = data.IS_LOCALSHOT ? 'res/posts.json' : data.ROOT + '?controller=expense&action=save';
data.URL_REPORT = data.IS_LOCALSHOT ? 'res/posts.json' : data.ROOT + '?controller=expense&action=get_by_id';


data.DIR_RULE = '#';

data.NAV_LOGIN 			= 'login';
data.NAV_EXPENSE 		= 'expense';
data.NAV_REPORT			= 'report';

// menu text mapping
data.MENU = {};
data.MENU[data.NAV_LOGIN] 		= 'Login - Gigster';
data.MENU[data.NAV_EXPENSE]		= 'expense - Gigster';
data.MENU[data.NAV_REPORT]		= 'Report - Gigster';



export default data;
