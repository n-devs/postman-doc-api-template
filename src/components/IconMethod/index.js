import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    requestMethodSizeSM: {
        width: '30px',
        lineHeight: ' 1.1',
        textAlign: 'right',
        position: 'absolute',
        fontWeight: '700',
        fontSize: '9px',
        margin: '5px 0',
    },
    requestMethodPOST: {
        color: '#f5a623'
    },
    requestMethodGET: {
        color: '#3eb63e'
    },
    requestMethodPUT: {
        color: '#4a90e2'
    },
    requestMethodDELETE: {
        color: '#ed4b4'
    },
    requestMethod: {
        textTransform: 'uppercase',
        display: 'inherit',
    },
    equestMethodSpan: {
        fontSize: 'inherit'
    }
}));

export default function IconMethod(props) {
    const classes = useStyles();
    const { method } = props;

    switch (method) {
        case "POST":
            return (<div className={classes.requestMethodSizeSM}>
                <div className={clsx(classes.requestMethodPOST, classes.requestMethod)} title={"POST"}>
                    <span className={classes.equestMethodSpan}>{"POST"}</span>
                </div>
            </div>)
            break;
        case "PUT":
            return (<div className={classes.requestMethodSizeSM}>
                <div className={clsx(classes.requestMethodPUT, classes.requestMethod)} title={"PUT"}>
                    <span className={classes.equestMethodSpan}>{"PUT"}</span>
                </div>
            </div>)
            break;
        case "GET":
            return (<div className={classes.requestMethodSizeSM}>
                <div className={clsx(classes.requestMethodGET, classes.requestMethod)} title={"GET"}>
                    <span className={classes.equestMethodSpan}>{"GET"}</span>
                </div>
            </div>)
            break;
        case "DELETE":
            return (<div className={classes.requestMethodSizeSM}>
                <div className={clsx(classes.requestMethodDELETE, classes.requestMethod)} title={"DEL"}>
                    <span className={classes.equestMethodSpan}>{"DEL"}</span>
                </div>
            </div>)
            break;

        default:
            break;
    }
};

IconMethod.propTypes = {
    type: PropTypes.string,
};
