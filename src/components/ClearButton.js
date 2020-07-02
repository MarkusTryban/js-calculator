const ClearButton = () => {
  render() {
    return (
      <div className='clear-btn' onClick={() => this.props.handleClear()}>
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;
