/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

/*
* @params tree:要转换的树结构数据
* @output list:返回转换好的列表结构数据
* */
export function toListBF (tree) {
  const tempList = tree.slice(0)
  const res = []
  for (const node of tempList) {
      const { description, id, name, users } = node
      res.push({
          description,
          id,
          name,
          users,
          children: [],
          parentId: node.parentId === undefined ? null : node.parentId
      })
      if (node.children.length !== 0) {
          tempList.push(...node.children.map((item) => {
            item.parentId = node.id
            return item
          }))
      }
  }
  return res
}

/**
 * View Model Type:
 * 时间日期
 * 数值
 * 字符串
 * 地理-国家
 * 地理-省份
 * 地理-城市
 */
export const SQL_FIELD_TYPES = {
    date: ['DATE', 'DATETIME', 'TIMESTAMP', 'TIME', 'YEAR'],
    number: ['TINYINT', 'SMALLINT', 'MEDIUMINT', 'INT', 'BIGINT',
        'FLOAT', 'DOUBLE', 'DOUBLE PRECISION', 'REAL', 'DECIMAL', 'BIT', 'SERIAL', 'BOOL', 'BOOLEAN', 'DEC', 'FIXED', 'NUMERIC'],
    string: ['CHAR', 'VARCHAR', 'TINYTEXT', 'TEXT', 'MEDIUMTEXT', 'LONGTEXT', 'TINYBLOB', 'MEDIUMBLOB', 'BLOB', 'LONGBLOB', 'BINARY', 'VARBINARY', 'ENUM', 'SET'],
    geoCountry: [],
    geoProvince: [],
    geoCity: []
  }




