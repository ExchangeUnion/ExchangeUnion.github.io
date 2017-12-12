export class Utils {

    public static getUserLanguage() {
        const lang = window.navigator.language;
        return {
            lang: lang
        };
    }

    public static queryString(name: string, url: string = window.location.href) {
        name = name.replace(/[[]]/g, '\\$&');

        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
        const results = regex.exec(url);

        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }

        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    public static checkEmail(email: string) {
        const emailReq =  /^\w+(\.\w+)*@\w+(\.\w+)+$/;
        return emailReq.test(email);
    }

    public static formantMonth(month: number) {
        let output = '';
        switch (month) {
            case 0:
                output = 'Jan.';
                break;
            case 1:
                output = 'Feb.';
                break;
            case 2:
                output = 'Mar.';
                break;
            case 3:
                output = 'Apr.';
                break;
            case 4:
                output = 'May';
                break;
            case 5:
                output = 'Jun.';
                break;
            case 6:
                output = 'Jul.';
                break;
            case 7:
                output = 'Aug.';
                break;
            case 8:
                output = 'Sep.';
                break;
            case 9:
                output = 'Oct.';
                break;
            case 10:
                output = 'Nov.';
                break;
            case 11:
                output = 'Dec.';
                break;
            default :
                break;
        }
        return output;
    }
    
}