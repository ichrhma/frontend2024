/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from "../models/users";

const index = () => {
    console.log("Index - Get All Users");
    users.forEach(function (user) {
        console.log(user);
    });
};
const store = (user) => {
    users.push(user);
};

export { index, store };

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (users) => {
    return Promise.all(
        users.map(user => {
          return new Promise(resolve => {
            setTimeout(() => {
              const formattedName = `${users.firstName} ${users.age} ${users.major}`;
              resolve(formattedName);
            }, 3000);
          });
        })
      );
};

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
function findByName(users, name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const findByName = users.find(user => user.name === name);
        if (findByName) {
          resolve(findByName);
        } else {
          reject(new Error(`User dengan nama '${name}' tidak ditemukan.`));
        }
      }, 2000); 
    });
  }

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
function filterByMajor(users, major) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredUsers = users.filter(user => user.major === major);
        resolve(filteredUsers);
      }, 4000);
    });
  }

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export { formatUser, findByName, filterByMajor };
