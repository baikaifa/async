var a = new Promise((resolve, reject) => {
  this.props.get_standard_face_data();
  resolve(true);
});
a.then(function() {
  console.log(this.props.nowChoseWhichFaceStore);
});
