package com.domain.dto;

import java.util.ArrayList;
import java.util.List;

public class Response<T> {
  private Integer status;
  private List<String> messages = new ArrayList<>();
  
  private T payload;
  public Integer getStatus() {
    return status;
  }
  public void setStatus(Integer status) {
    this.status = status;
  }
  public List<String> getMessages() {
    return messages;
  }
  public void setMessages(List<String> datas) {
    this.messages = datas;
  }
  public T getPayload() {
    return payload;
  }
  public void setPayload(T payload) {
    this.payload = payload;
  }
  
}
