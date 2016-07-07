/**
 * Created by joway on 16/7/6.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Pagination} from 'antd';
const Paging = () => (
    <Pagination defaultCurrent={1} total={500}/>
);

export default Paging;
