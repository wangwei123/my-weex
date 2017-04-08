package com.alibaba.weex.commons.util;

import java.util.List;
import java.util.Map;

import javax.annotation.Nullable;

public class Assertions {
  public Assertions() {
  }

  public static <T> T assumeNotNull(@Nullable T object) {
    return object;
  }

  public static <T> T assumeNotNull(@Nullable T object, String explanation) {
    return object;
  }

  public static <T> T assertNotNull(@Nullable T object) {
    if(object == null) {
      throw new AssertionError();
    } else {
      return object;
    }
  }

  public static <T> T assertNotNull(@Nullable T object, String explanation) {
    if(object == null) {
      throw new AssertionError(explanation);
    } else {
      return object;
    }
  }

  public static <T> T getAssumingNotNull(List<T> list, int index) {
    return list.get(index);
  }

  public static <T> T getAssertingNotNull(List<T> list, int index) {
    assertCondition(0 <= index && index < list.size());
    return assertNotNull(list.get(index));
  }

  public static <K, V> V getAssumingNotNull(Map<K, V> map, K key) {
    return map.get(key);
  }

  public static <K, V> V getAssertingNotNull(Map<K, V> map, K key) {
    assertCondition(map.containsKey(key));
    return assertNotNull(map.get(key));
  }

  public static void assumeCondition(boolean condition) {
  }

  public static void assumeCondition(boolean condition, String explanation) {
  }

  public static void assertCondition(boolean condition) {
    if(!condition) {
      throw new AssertionError();
    }
  }

  public static void assertCondition(boolean condition, String explanation) {
    if(!condition) {
      throw new AssertionError(explanation);
    }
  }

  public static AssertionError assertUnreachable() {
    throw new AssertionError();
  }

  public static AssertionError assertUnreachable(String explanation) {
    throw new AssertionError(explanation);
  }

  public static AssertionError assertUnreachable(Exception exception) {
    throw new AssertionError(exception);
  }
}
