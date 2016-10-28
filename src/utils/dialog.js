import { Modal } from "antd";

export const successDialog = (msg = '操作成功', title = '提示',) => {
  Modal.success({
    title: title,
    content: msg
  });
};

export const errorDialog = (msg = '操作失败', title = '提示',) => {
  Modal.error({
    title: title,
    content: msg
  });
};

export const infoDialog = (msg, title = '提示',) => {
  Modal.info({
    title: title,
    content: msg
  });
};
export const warningDialog = (msg, title = '提示',) => {
  Modal.warning({
    title: title,
    content: msg
  });
};
