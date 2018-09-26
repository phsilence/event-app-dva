import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import GridItemManageList from '../../components/gridItemManage/List';

const GridItemManage = ({location,dispatch,gridItemManage}) => {
    const { list, loading, current } = gridItemManage;
    const gridItemListProps = {
        dataSource: list,
        loading,
        current,
        onDeleteItem(id){
            dispatch({
                type: 'gridItemManage/delete',
                payload: id,
            });
        },
    };

    return (
        <GridItemManageList {...gridItemListProps} />
    );
}

GridItemManage.propTypes = {
    gridItems: PropTypes.object,
};

function mapStateToProps({ gridItemManage }){
    return {gridItemManage};
}

export default connect(mapStateToProps)(GridItemManage);