/**
 * 
 * 
///<reference types="moment"/>  //引入第三方模块声明
import * as moment from 'moment'
 */

declare function setTitle(title: string | number): void;

declare function getTitle(): void;

declare let documentTitle: string

interface String {  // 全局模块声明
  getFirst(): string
}