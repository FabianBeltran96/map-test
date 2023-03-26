const TOKEN_KEY = "token"
const USER_INFO = "userInfo"
const ROL_INFO = "rolInfo"
const PER_INFO = "permission"
const USER_TABLESETTING = "tableSettings"
const WEB_CONFIG = "webConfig"
const COMPANY_CONFIG = "companyConfig"

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_KEY)
}

export const saveWebConfig = config => {
  window.localStorage.setItem(WEB_CONFIG, config)
}

export const getWebConfig = () => {
  return window.localStorage.getItem(WEB_CONFIG)
}

export const saveCompanyConfig = company => {
  window.localStorage.setItem(COMPANY_CONFIG, company)
}

export const getCompanyConfig = () => {
  return window.localStorage.getItem(COMPANY_CONFIG)
}

export const saveToken = token => {
  window.localStorage.setItem(TOKEN_KEY, token)
}

export const destroyToken = () => {
  window.localStorage.removeItem(TOKEN_KEY)
}

export const destroyRol = () => {
  window.localStorage.removeItem(ROL_INFO)
}

export const destroyTableSetting = () => {
  window.localStorage.removeItem(USER_TABLESETTING)
}

export const getUser = () => {
  return window.localStorage.getItem(USER_INFO)
}

export const saveUser = user => {
  window.localStorage.setItem(
    USER_INFO,
    JSON.stringify ({
      ...user,
      company_id: user.company_id
    })
  )
}
export const saveRol = rol => {
  window.localStorage.setItem(
    ROL_INFO,
    JSON.stringify ({
      ...rol
    })
  )
}
export const savePermission = permi => {
  window.localStorage.setItem(
    PER_INFO,
    JSON.stringify ({
      ...permi
    })
  )
}

export const saveTableSettings = user => {
  window.localStorage.setItem(
    USER_TABLESETTING,
    JSON.stringify ({
      ...user.companies[0].web_config.tables_settings
    })
  )
}

export const destroyUser = () => {
  window.localStorage.removeItem(USER_INFO)
}

export const destroyPermission = () => {
  window.localStorage.removeItem(PER_INFO)
}

export default { getToken, saveToken, destroyToken, getUser, saveUser, saveRol, destroyUser, 
      saveTableSettings, destroyTableSetting, saveWebConfig, getWebConfig, saveCompanyConfig, savePermission, destroyPermission, getCompanyConfig, destroyRol }