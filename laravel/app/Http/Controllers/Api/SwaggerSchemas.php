<?php

namespace App\Http\Controllers\Api;

use OpenApi\Annotations as OA;

/**
 * @OA\Schema(
 *     schema="User",
 *     required={"id", "name", "email"},
 *     @OA\Property(property="id", type="string", format="uuid", example="123e4567-e89b-12d3-a456-426614174000"),
 *     @OA\Property(property="name", type="string", example="John Doe"),
 *     @OA\Property(property="email", type="string", format="email", example="john@example.com"),
 *     @OA\Property(property="created_at", type="string", format="date-time"),
 *     @OA\Property(property="updated_at", type="string", format="date-time")
 * )
 *
 * @OA\Schema(
 *     schema="UserCreateRequest",
 *     required={"name", "email", "password"},
 *     @OA\Property(property="name", type="string", example="John Doe"),
 *     @OA\Property(property="email", type="string", format="email", example="john@example.com"),
 *     @OA\Property(property="password", type="string", format="password", example="secret123")
 * )
 *
 * @OA\Schema(
 *     schema="UserUpdateRequest",
 *     @OA\Property(property="name", type="string", example="John Doe Updated"),
 *     @OA\Property(property="email", type="string", format="email", example="johnupdated@example.com"),
 *     @OA\Property(property="password", type="string", format="password", example="newsecret123")
 * )
 *
 * @OA\Schema(
 *     schema="Role",
 *     required={"id", "name"},
 *     @OA\Property(property="id", type="integer", example=1),
 *     @OA\Property(property="name", type="string", example="admin")
 * )
 *
 * @OA\Schema(
 *     schema="RoleCreateRequest",
 *     required={"name"},
 *     @OA\Property(property="name", type="string", example="editor")
 * )
 *
 * @OA\Schema(
 *     schema="UserRole",
 *     required={"user_id","role_id"},
 *     @OA\Property(property="user_id", type="string", format="uuid", example="123e4567-e89b-12d3-a456-426614174000"),
 *     @OA\Property(property="role_id", type="integer", example=2),
 *     @OA\Property(property="role_name", type="string", example="admin")
 * )
 *
 * @OA\Schema(
 *     schema="UserRoleCreateRequest",
 *     required={"user_id","role_id"},
 *     @OA\Property(property="user_id", type="string", format="uuid", example="123e4567-e89b-12d3-a456-426614174000"),
 *     @OA\Property(property="role_id", type="integer", example=2)
 * )
 */
class SwaggerSchemas
{
    // فقط لتعريف السكيمات الخاصة بالتوثيق، لا حاجة لتعريف دوال هنا
}
