export const {REACT_APP_NEXUS_URL } = process.env;

export default {
    LOGIN_URL: `${REACT_APP_NEXUS_URL}/public/user/token`,
    LIST_CONTACTS: `${REACT_APP_NEXUS_URL}/api/v1/message/3/list`,
    CREATE_CONTACTS: `${REACT_APP_NEXUS_URL}/api/v1/contact/3/create`,
    REGISTER_USER: `${REACT_APP_NEXUS_URL}/public/user/registration`,
    BROADCAST_MESSAGE: `${REACT_APP_NEXUS_URL}/api/v1/message/:sid/broadcast/send`,
    BULK_SEND_DLRS: `${REACT_APP_NEXUS_URL}/public/bulksms/:msg_id/dlrs`,
    SIMULATE_CALLBACK: `${REACT_APP_NEXUS_URL}/public/bulksms/:msg_id/dlr`,
    UPLOAD_CONTACTS: `${REACT_APP_NEXUS_URL}/api/v1/contact/:app_id/upload`,
    LIST_MESSAGES: `${REACT_APP_NEXUS_URL}/api/v1/message/:app_id/list`,
    APP_SERVICES: `${REACT_APP_NEXUS_URL}/api/v1/application/:app_id/service/list`,
    ATTACH_USER_APP: `${REACT_APP_NEXUS_URL}/api/v1/application/:app_id/user/attach`,
    ATTACH_SERVICE_APP: `${REACT_APP_NEXUS_URL}/api/v1/application/:app_id/service/:service_id`,
    CREATE_SERVICE: `${REACT_APP_NEXUS_URL}/api/v1/service/create`,
    CREATE_APP: `${REACT_APP_NEXUS_URL}/api/v1/application/create`,
    SEND_SMS: `${REACT_APP_NEXUS_URL}/api/v1/message/:sid/user/send`,
};