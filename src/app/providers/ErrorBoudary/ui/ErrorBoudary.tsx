import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryprops {
  children: ReactNode
}

interface ErrorBoundarystate {
    hasError: boolean

}

class ErrorBoundary extends React.Component<ErrorBoundaryprops, ErrorBoundarystate> {
    constructor (props: ErrorBoundaryprops) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError (error: Error) {
        return { hasError: true };
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render () {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return <Suspense fallback=''><PageError/></Suspense>;
        }

        return children;
    }
}

export default ErrorBoundary
