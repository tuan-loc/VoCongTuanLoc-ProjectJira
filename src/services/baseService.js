import Axios from "axios";
import {
  ACCESS_TOKEN,
  DOMAIN_JIRA,
  TOKEN_CYBERSOFT,
} from "../util/constants/settingSystem";

export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN_JIRA}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN_JIRA}/${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN_JIRA}/${url}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN_JIRA}/${url}`,
      method: "DELETE",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    });
  };
}
