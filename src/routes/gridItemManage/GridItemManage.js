import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import GridItemManageList from '../../components/gridItemManage/List';
import SearchBox from '../../components/gridItemManage/SearchBox';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

const GridItemManage = ({location,dispatch,gridItemManage}) => {
    const { list, loading, current, activeItemState } = gridItemManage;

    const tabChange = (tabActiveKey) => {
        dispatch({
            type: 'gridItemManage/query',
            payload: {
                itemType: tabActiveKey,
            },
        });
    };

    const searchBoxProps = {

    }

    const gridItemListProps = {
        dataSource: list,
        loading,
        current,
        activeItemState,
        onDeleteItem(id){
            dispatch({
                type: 'gridItemManage/delete',
                payload: id,
            });
        },
    };

    return (
        <div>
            <Tabs onChange={tabChange} type="card" tabBarGutter={5}>
                <TabPane tab="未发布" key="1">
                </TabPane>
                <TabPane tab="已发布" key="2">
                </TabPane>
                <TabPane tab="已停用" key="3">
                </TabPane>
            </Tabs>
            <SearchBox {...searchBoxProps} />
            <GridItemManageList {...gridItemListProps} />
        </div>
    );
}

GridItemManage.propTypes = {
    gridItemManage: PropTypes.object,
};

function mapStateToProps({ gridItemManage }){
    return {gridItemManage};
}

export default connect(mapStateToProps)(GridItemManage);