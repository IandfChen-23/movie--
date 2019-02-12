var postsData = require("../data/post-data")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];//
    this.setData({
      postData: postsData.postList[postId]
    });
    var postsCollected = wx.getStorageSync('posts_collected');
    if(postsCollected){
      var postCollected = postsCollected[postId];
      this.setData({
        collected: postCollected
      })
    }
    else{
      var postsCollected={};
      postsCollected[postId]=false;
      wx.setStorageSync('posts_collected',postsCollected);

    }
    
    
  },
  onColletionTap: function (event) {
    //拿到这个缓存的值
    var postsCollected = wx.getStorageSync('posts_collected');
    //拿到这个值
    var postCollected = postsCollected[this.data.currentPostId];
    //取反操作 收藏的变成未收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    //更新文章是否的缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    //更新数据绑定变量，从而实现切换图片
    this.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
      duration: 800,
      icon: 'success'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})