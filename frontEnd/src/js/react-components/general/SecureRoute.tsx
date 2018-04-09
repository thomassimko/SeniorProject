import * as React from "react"
import {Route, Redirect} from "react-router-dom"

export function SecureRoute ({component: Component, isAuthed, ...rest}) {
    console.log(`secure route ${isAuthed}`);
    return (
        <Route
            {...rest}
            render={(props) => isAuthed
                ? <Component {...props} />
                : <Redirect to={{pathname: `/login${encodeURI(props.location.pathname)}`}}/>
            }
        />
    )
}