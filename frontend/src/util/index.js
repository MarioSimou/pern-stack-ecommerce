import React from 'react'

export default (()=>({
    // routine that checks and identifies if a datatype has a value
    hasValue : function ( v ){
        switch( Object.prototype.toString.call( v )){
            case '[object Array]':
            case '[object String]':
                return v.length > 0 ? true : false
            case '[object Number]':
                return Number( v ).toString().length > 0 ? true : false
            case '[object Object]':
                return Object.values( v ).length > 0 ? true : false
            case '[object Undefined]':
            case '[object Null]':
                return false
            default:
                return null
        }
    },
    customInput : ({ input , meta , label , placeholder , type , pattern }) => {
        const { name } = input
        const { touched , error } = meta

        switch( touched ){
            case true:
                const validFeedback = error ? <div className="invalid-feedback">{ error }</div> : ''
                return (
                    <div className="form-group">
                        <label htmlFor={ name }>{ label }</label>
                        <input { ...input } 
                            type={ `${ type }` } 
                            id={ name } 
                            name={ name } 
                            className={ `form-control ${ error ? 'is-invalid' : 'is-valid' }` }
                            placeholder={ `${ placeholder ? placeholder : '' } ` }
                            pattern={ `${ pattern ? pattern : null }`}
                            required
                        />
                        { validFeedback }
                    </div>
                    )
            default:
                return (
                    <div className="form-group">
                    <label htmlFor={ name }>{ label }</label>
                    <input { ...input } 
                        type={ `${ type }`} 
                        id={ name } 
                        name={ name } 
                        className="form-control"
                        placeholder={ `${ placeholder ? placeholder : '' } ` }
                        pattern={ `${ pattern ? pattern : null }`}
                        required
                    />
                    </div> 
                )
        }
    }
}))()
