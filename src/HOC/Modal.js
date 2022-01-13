import React from "react";
import { Drawer, Space, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

export default function Modal(props) {
  const { visible, ComponentContentDrawer, callBackSubmit, title } =
    useSelector((state) => state.drawerReducer);
  const dispatch = useDispatch();

  const showDrawer = () => {
    dispatch({ type: "OPEN_DRAWER", visible: true });
  };

  const onClose = () => {
    dispatch({ type: "CLOSE_DRAWER", visible: false });
  };

  return (
    <>
      <Drawer
        title={title}
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div style={{ textAlign: "right" }}>
            <Button onClick={onClose} style={{ marginRight: 15 }}>
              Cancel
            </Button>
            <Button onClick={onClose} type="primary" onClick={callBackSubmit}>
              Submit
            </Button>
          </div>
        }
      >
        {ComponentContentDrawer}
      </Drawer>
    </>
  );
}
