import React, {Component} from 'react';

//Только классовые компоненты могут выступать в роли предохранителей.
class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {hasError: false, errorName: ''};
  }


  //Используйте static getDerivedStateFromError() при рендеринге запасного UI в случае отлова ошибки.
  static getDerivedStateFromError(error) {
    console.log(error)
    return {hasError: true}
  }

  //Используйте componentDidCatch() при написании кода для журналирования информации об отловленной ошибке.
  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo)
    console.log(error, errorInfo);
    this.setState({errorName: `${error.name}: ${error.message}`})
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorName}</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary;