import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createCategory, updateCategory, destroyCategory} from '../../reducers/index';
import CategoryCreateForm from '../category-form/CategoryCreateForm.js';
import CategoryItem from '../category-item/CategoryItem.js';
import CategoryList from '../category-list/CategoryList.js';

const Dashboard = props => {
    return(
        <Fragment>
           <CategoryCreateForm onComplete={props.createCategory} />
           <CategoryList categories={props.categories} onComplete={props.createCategory} onRemove={props.destroyCategory} onUpdate={props.updateCategory}/>
        </Fragment>
    )
};

const mapStateToProps = (state) => ({categories: state});

const mapDispatchToProps = (dispatch) => ({
    createCategory: category => dispatch(createCategory(category)),
    updateCategory: category => dispatch(updateCategory(category)),
    destroyCategory: category => dispatch(destroyCategory(category)),
});

Dashboard.propTypes = {
    createCategory: PropTypes.func,
    updateCategory: PropTypes.func,
    destroyCategory: PropTypes.func,
    categories: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);